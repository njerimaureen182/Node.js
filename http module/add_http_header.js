var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello Worlsadfasdd!');
  res.end();
}).listen(8080);     

console.log('Server is running on a port over 8000')