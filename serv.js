var formats = require('./Format');
var buzzer = require('./FizzBuzz')

var max = process.argv[2];
var format = process.argv[3];
console.log(formats.format(buzzer.fizzbuzz(max), format));
