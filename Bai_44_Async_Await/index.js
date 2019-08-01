// Async Function - Await
var fs = require('fs');
// Function: Promise 
function readFilePromise(path) {
	return new Promise((resolve, reject) => {
		fs.readFile(path, 'utf8', function(err, data) {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
}

async function run() {
	var song = await readFilePromise('song1.txt');
	var text = await readFilePromise('text1.txt');
	console.log(song); 
	console.log(text);
	return [song, text];
}

run().then(values => console.log(values))
	 .catch(error => console.log('Error........', error));
