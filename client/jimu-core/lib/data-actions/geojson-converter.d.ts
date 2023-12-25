import { type DataRecord } from '../data-sources/data-source-interface';
export declare function arcgisToGeoJSON(dataRecords: DataRecord[], idAttribute: string, outFields?: string[]): any;
export declare function projectToWGS84(records: DataRecord[]): Promise<DataRecord[]>;
