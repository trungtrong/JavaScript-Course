// Async Function - Await
var fs = require('fs');
// Function: Promise 
function readFilePromise(path) {
	return new Promise((resolve, reject) => {
		fs.readFile(path, 'utf8', function(err, data) {
			if (err) {
				reject(`${path} error`);
			} else {
				resolve(data);
			}
		});
	});
}

async function run() {
	console.log('lallaa 1');
	var song = await readFilePromise('./song2.txt');
	var text = await readFilePromise('./text1.txt');
	console.log('1', song); 
	console.log('2', text);
	console.log('lallaa 2');
	return [song, text];
}

run().then(values => console.log(values))
	 .catch(error => console.log('Error........', error));
