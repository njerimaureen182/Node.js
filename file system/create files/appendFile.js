var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'hey there!', function(err) {
	// body...
	if (err) {
		throw err;
	}
	console.log('saved');
})