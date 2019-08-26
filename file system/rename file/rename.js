var fs = require('fs');

fs.rename('mynewfile5.txt','myrenamedfile.txt', function(err){
	if(err) throw err;
	console.log('file renamed! woop!');
});