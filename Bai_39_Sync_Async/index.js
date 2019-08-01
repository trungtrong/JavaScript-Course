var fs = require('fs');

//  Sync
// console.log('Start');
// var text = fs.readFileSync('text.json', 'utf8');
// console.log(text);
// console.log('End');

// Async
console.log('Start');
fs.readFile('text.json', 'utf8', function(err, data) {
	console.log(data);
	console.log(typeof data);
	console.log(JSON.parse(data));
});
