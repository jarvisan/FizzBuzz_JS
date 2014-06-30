var http = require('http');
var buzzer = require('./FizzBuzz')

var max = process.argv[2];
var format = process.argv[3];
console.log(buzzer.fizzbuzz(max, format));
