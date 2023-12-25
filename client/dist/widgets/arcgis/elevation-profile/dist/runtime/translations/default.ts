export default {
  _widgetLabel: 'Elevation Profile',
  _action_select_label: 'Select line',
  _action_view_label: 'View Elevation Profile',

  selectLinesLabel: 'Select line',
  selectLinesDesc: 'Select a line to view the elevation.',
  selectButtonLabel: 'Select',
  drawProfileLabel: 'Draw profile',
  drawProfileDesc: 'Draw a line to view the ground elevation.',
  drawButtonLabel: 'Draw',

  backButtonLabel: 'Reset',
  doneButtonLabel: 'Done',
  clearButtonLabel: 'Clear',
  newProfileButtonLabel: 'New profile',

  drawUserInfo: 'Click the map to place the first point and double-click to finish.',
  selectUserInfo: 'Click a line on the map to begin.',
  emptyDrawStateWarning: 'Draw on the map to generate an elevation profile.',
  emptySelectStateWarning: 'Select a line on the map to generate an elevation profile.',
  infoMsgWhileDrawing: 'Double-click or click Done to finish.',
  infoMsgWhileSelecting: 'Select a connected line (yellow dotted) or click Done to finish.',
  addToSelectionWarning: 'There are no additional connected lines to select.',
  chartRender: 'Elevation Profile for the selected or drawn lines.',

  noFeaturesFound: 'No selectable line in this location. Click a line from the selectable layers.',
  unknownError: 'There was an unknown error generating the profile.',
  noProfileError: 'No elevation information is available for this location.',
  tooComplexError: 'Profile could not be generated. Input line is too complex.',
  tooComplexAnalysisError: 'Analysis could not be performed for this line. Input line is too complex.',
  invalidGeometryError: 'Profile could not be generated. Invalid geometry.',
  invalidElevationInfoError: 'Profile could not be generated. Elevation options of the line are not supported.',

  chartStatistics: 'Profile Statistics',
  chartFlip: 'Reverse Direction',
  chartExport: 'Export Profiles',
  settingsOptions: 'Settings',
  exportHint: 'Values will be exported to a CSV file.',
  customizeIntervalTooltip: 'Customize at which distance interval values are extracted. This interval is only applied to ground and profile elevation values.',
  customizeIntervalLabel: 'Customize interval',
  exportLabel: 'Export',
  intervalErrorHint: 'This value is out of range {xMin} - {xMax}.',
  intervalHintForInvalidEntry: 'This value is out of range.',
  layerName: 'Layer Name',
  intersectingLayerDisplayFieldLabel: 'Attribute (Display Field)',
  oneFieldLabelForExport: 'Field 1',
  twoFieldLabelForExport: 'Field 2',
  statisticsLabel: 'Profile Statistics',
  elevationUnitLabel: 'Elevation units',
  distanceUnitLabel: 'Distance units',
  selectableLayersLabel: 'Selectable layers',
  selectLayerLabel: 'Select layers',
  selectedLayerCount: '{selectedLayerCount} enabled',
  intersectingLayersLabel: 'Intersecting layers',
  bufferSelectorLabel: 'Intersection buffer',
  groundElevation: 'Ground Elevation',
  uniformChartScaling: 'Uniform scaling',
  uniformChartScalingInfo: 'Use a uniform scale for the Distance and Elevation axes.',
  selectLayerWarning: 'At least one layer should be enabled for selection',
  volumetricObj: 'Volumetric objects',

  meters: 'Meters',
  metersAbbreviation: 'm',
  feet: 'Feet',
  feetAbbreviation: 'ft',
  kilometers: 'Kilometers',
  kilometersAbbreviation: 'km',
  miles: 'Miles',
  milesAbbreviation: 'mi',
  yards: 'Yards',
  yardsAbbreviation: 'yd',

  noStatsValue: 'No value',

  distanceLabel: 'Distance',
  elevationLabel: 'Elevation',
  graphDistanceLabel: 'Distance - {unit}',
  graphElevationLabel: 'Elevation - {unit}',
  expandLegend: 'Expand Legend',

  maxDistance: 'MAX Distance',
  minElevation: 'MIN Elevation',
  maxElevation: 'MAX Elevation',
  avgElevation: 'AVG Elevation',
  elevationGain: 'Elevation Gain',
  elevationLoss: 'Elevation Loss',
  maxPositiveSlope: 'MAX Positive Slope',
  maxNegativeSlope: 'MAX Negative Slope',
  avgPositiveSlope: 'AVG Positive Slope',
  avgNegativeSlope: 'AVG Negative Slope'
}
