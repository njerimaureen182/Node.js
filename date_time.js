var http = require('http');
var dt = ('./myfirstmodule');

http.createServer(function(req, res) {
	// body...
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.write('The date and time are currently:' + dt.myDateTime());
	res.end();
}).listen(7000)

console.log("why are you running!")