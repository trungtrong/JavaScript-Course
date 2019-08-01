/**
async function f() {
	let promise = new Promise((resolve, reject) => {
		setTimeout(() => reject('done'), 1000);
	});

	let result = await promise;
	console.log(result);
}

f();  */

// 			23-3: Error Handling

// Ex1:
/**
async function f() {
	// await Promise.reject(new Error('Whoops!'));
	throw new Error('Whoops!');
}

f(); */


// 23-3-2- The important of catch handler

// Ex2:
/**
async function f() {
	try {
		let response = await baba();
	} catch(error) {
		console.log(error);
	}
} 

f();

setTimeout(() => console.log('a')); */

// Exercise 1:

async function loadJson(url) {
	let response = await fetch(u);
	
	if (response.status === 200) {
		return response.json();
	}

	throw new Error(response.status);
}

loadJson('https://no-such-user')
	.catch(console.log);