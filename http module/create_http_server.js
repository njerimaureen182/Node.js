var http = require('http');

// create server object
http.createServer(function(req, res) {
	// write response to client
	res.write('Today is Wednesday');

	// end response
	res.end();
}).listen(9001);
// the server object listens on port 9000

console.log('It is working!')
