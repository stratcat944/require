var colorutil = require('./colorutil.js');

var red = process.argv[2]
var green = process.argv[3]
var blue = process.argv[4]

luminosity = 0.2126*red + 0.7152*green + 0.0722*blue

var luminosity = colorutil.luminosity(red, green, blue);

console.log(luminosity);
