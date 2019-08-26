var fs = require('fs');

fs.writeFile('mynewfile.txt', 'The planet is dying!', function(err){
	if(err) throw err;

	console.log('replaced');
});