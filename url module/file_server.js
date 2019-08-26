var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res) {
	var q = url.parse(req.url, true);
	var filename = "." + q.pathname;

	fs.readFile('sum.html', function(err, data) {
		if (err) {
			res.writeHead(200, {'Content-Type':'text/html'});
			return res.end('404  File Not Found!');
		}
		res.writeHead(200, {'Content-Type':'text/html'});
		res.write(data);
		return res.end();
	})
}).listen(9003);

console.log('i think too much when i think about the future!')