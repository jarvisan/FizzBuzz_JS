var http = require('http');
var buzzer = require('./FizzBuzz')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var max = process.argv[2];
  var format = process.argv[3];
  res.write(buzzer.fizzbuzz(max, format));
  res.end();
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
