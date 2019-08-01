/** 			12-2- Error Object
try {
	lalala;
} catch(err) {
	console.log(err.stack);

} */


// 			12-3- Real-life, Using "try...catch"
/**
let json = "{bad json}";

try {
	let user = JSON.parse(json);
	console.log(user.name);
} catch(err) {
	console.log('Our apologies, the data has errors. We\'ll try to request it one more time.')
	console.log(err.name);
	console.log(err.message);
} */


//				12-4- Throwing our own errors

// Ex1:
/***
let json = '{"age": 30}';

try {
	let user = JSON.parse(json);
	console.log(user.name);
} catch(err) {
	console.log(err.name);  
} */

// Ex2: throw error
/*
let json = '{"age": 30}';

try {
	let user = JSON.parse(json);
	if (!user.name) {
		throw new SyntaxError('Incomplete data: no name');
	}
} catch(err) {
	console.log('JSON Error:', err.message);  
} */

//					12-5- Rethrowing Error
/*
let json = '{"age": 30}';

try {
	let user = JSON.parse(json);
	if (!user.name) {
		throw new SyntaxError('Incomplete data: no name');
	}

	blala(); // unexpected error
} catch(err) {
	if (err.name === 'SyntaxError') {
		console.log('JSON error:', err.message);
	} else {
		throw err; // rethrow
	}
}

console.log('Hello Ajinomoto'); */

/**/
// Ex2: demonstrates how such error can be caught
// by outer try...catch
/**
function readData() {
	let json = '{"age": 30}';

	try {
		let user = JSON.parse(json);

		blala(); // unexpected error
	} catch(err) {
		if (err.name === 'SyntaxError') {
			console.log('JSON error:', err.message);
		} else {
			throw err; // rethrow
		}
	}
}

try {
	readData();
} catch(err) {
	console.log('External catch got:', err.name);
} */
