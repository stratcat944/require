var colorutil = require('./colorutil.js');

var r = process.argv[2]
var g = process.argv[3]
var b = process.argv[4]

luminosity = 0.2126*r + 0.7152*g + 0.0722*b

var luminosity = colorutil.luminosity(r, g, b);

console.log(luminosity);
