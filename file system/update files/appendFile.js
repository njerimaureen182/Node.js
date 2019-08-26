var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Today is Thursday', function(err){
	if(err) throw err;
	console.log('updated');
});