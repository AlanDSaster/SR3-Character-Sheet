var VISION_NORMAL = 0;
var VISION_AUGMENTED_LOWLIGHT = 1;
var VISION_NATURAL_LOWLIGHT = 2;
var VISION_AUGMENTED_THERMOGRAPHIC = 3;
var VISION_NATURAL_THERMOGRAPHIC = 4;

var VISIBILITY_NORMAL = 0;
var VISIBILITY_FULL_DARKNESS = 1;
var VISIBILITY_MINIMAL_LIGHT = 2;
var VISIBILITY_PARTIAL_LIGHT = 3;
var VISIBILITY_GLARE = 4;
var VISIBILITY_MIST = 5;
var VISIBILITY_LIGHT_OBSTRUCTION = 6;
var VISIBILITY_HEAVY_OBSTRUCTION = 7;
var VISIBILITY_THERMAL_SMOKE = 8;

var VISIBILITY_TABLE = [
  [0,0,0,0,0], //normal
  [8,8,8,4,2], //full darkness
  [6,4,2,4,2], //minimal light
  [2,1,0,2,1], //partial light
  [2,4,2,4,2], //glare
  [2,4,2,4,2], //mist
  [4,4,2,0,0], //light obstruction
  [6,6,4,1,0], //heavy obstruction
  [4,4,4,8,6], //thermal smoke
];
