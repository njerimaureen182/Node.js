var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'hello world', function(err){
	if(err) throw err;

	console.log('i made it!')

})