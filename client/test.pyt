# -*- coding: utf-8 -*-
import arcpy
import configparser
import os
from pathlib import Path
import json
import datetime
import print_site_utils
from arcgis.gis import GIS
import inspect


class Toolbox(object):
    def __init__(self):
        """Define the toolbox (the name of the toolbox is the name of the
        .pyt file)."""
        self.label = "Print Curated Site"
        self.alias = "print_curated_site"

        # List of tool classes associated with this toolbox
        self.tools = [PrintCuratedSite]


class PrintCuratedSite(object):
    def __init__(self):
        """Define the tool (tool name is the name of the class)."""
        self.label = "PrintCuratedSite"
        self.description = ""
        self.canRunInBackground = False

    def getParameterInfo(self):
        """Define parameter definitions"""
        params = [
            arcpy.Parameter(displayName="Job ID",
                            name="job_id",
                            datatype="String",
                            parameterType="Required",
                            direction="Input"
                            ),
            arcpy.Parameter(displayName="results",
                            name="results",
                            datatype="String",
                            parameterType="Derived",
                            direction="Output"
                            )
        ]
        return params

    def execute(self, parameters, messages):
        """The source code of the tool. - ESRI's description :)"""
        """Basically the main method that is called when the tool is ran."""
        CONFIG_PATH = r'C:\Users\hartc\Documents\reli-curation-falcon\geoprocessing_tools\print_curated_site\config.env'
        IMAGE_OUT_PATH = r'C:/Users/hartc/Documents/ArcGIS/Projects/MyProject5/scratch'
        MAP_JSON_PATH = r'C:/Users/hartc/Documents/reli-curation-falcon/geoprocessing_tools/print_curated_site/web_map_as_json.json'
        LABEL_JSON_PATH = r'C:/Users/hartc/Documents/reli-curation-falcon/geoprocessing_tools/print_curated_site/building_label_template.json'
        try:
            config = print_site_utils.get_config(CONFIG_PATH, parameters)
            arcgis_token = arcpy.SignInToPortal(config["PortalSettings"]["PORTAL_URL"],
                                                config["PortalSettings"]["USERNAME"],
                                                config["PortalSettings"]["PASSWORD"])

            gis = GIS(config["PortalSettings"]["PORTAL_URL"],
                      config["PortalSettings"]["USERNAME"],
                      config["PortalSettings"]["PASSWORD"])

            search_result = gis.content.search(
                "Curated ReLi Site", "Feature Layer")

            if (len(search_result) < 1 or len(search_result[0].layers) < 1):
                parameters[1].value = "Curated Site Feature Service Not Found"
                return

            curated_site_fs = search_result[0].layers[0]

            with open(MAP_JSON_PATH, 'r') as f:
                web_map_json = json.load(f)

            job_id = parameters[0].valueAsText

            web_map_json = print_site_utils.update_arcgis_tokens(
                web_map_json, arcgis_token["token"], parameters)

            web_map_json = print_site_utils.update_definition_expression(
                web_map_json, job_id, parameters)

            curated_sites = print_site_utils.get_layer_geoms(
                job_id, config["Services"]["CURATED_SITE_URL"], int(config["Values"]["WKID"]), ["SHAPE@", "OBJECTID", "reli_site_id"], parameters)

            if (len(curated_sites) == 0):
                parameters[1].value = 'No Curated Site Polygon found'
                return

            if (len(curated_sites[0]) < 3):
                parameters[1].value = 'Insuffiecient Data returned for Curated Site'
                return

            building_footprints = print_site_utils.get_layer_geoms(
                job_id, config["Services"]["BUILDING_FOOTPRINTS_URL"], int(config["Values"]["WKID"]), ["SHAPE@", "building_label"], parameters)

            if (len(building_footprints) > 0):
                with open(LABEL_JSON_PATH, 'r') as f:
                    label_json = json.load(f)
                web_map_json = print_site_utils.update_labels_layer(
                    web_map_json, building_footprints, label_json, parameters)

            # just buffer the first geometry. It is not the responsibility of this tool to handle multiple site polygons for one job
            buffered_curated_site = curated_sites[0][0].buffer(
                int(config["Values"]["BUFFER_DISTANCE"])).extent

            web_map_json["mapOptions"]["extent"]["xmin"] = buffered_curated_site.XMin
            web_map_json["mapOptions"]["extent"]["ymin"] = buffered_curated_site.YMin
            web_map_json["mapOptions"]["extent"]["xmax"] = buffered_curated_site.XMax
            web_map_json["mapOptions"]["extent"]["ymax"] = buffered_curated_site.YMax

            web_map_json["exportOptions"]["outputSize"] = print_site_utils.calculate_output_size(
                buffered_curated_site, int(config["Values"]["IMAGE_SIZE"]), parameters)

            web_map_json = json.dumps(web_map_json)

            time = datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S")

            image_file_name = f"{curated_sites[0][2]}_{time}.png"

            image_path = os.path.join(
                IMAGE_OUT_PATH, image_file_name)

            exported_image = arcpy.server.ExportWebMap(
                web_map_json, image_path, "PNG8", None, "MAP_ONLY")

            curated_site_fs.attachments.add(
                curated_sites[0][1], str(exported_image), image_file_name)

            arcpy.AddMessage("Succesfully attached image")
        except Exception as e:
            arcpy.AddError(f"An error occurred: {str(e)}")
            parameters[1].value = "ERROR"
            raise Exception(f"An error occurred: {str(e)}")

        return
