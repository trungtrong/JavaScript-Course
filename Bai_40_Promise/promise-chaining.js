
// 		22-2-1- Promise Chaining

// Ex1:
/*
new Promise((resolve, reject) => {	
	setTimeout(() => resolve(1), 1000);

}).then(result => {
	console.log(result);
	return result * 2;

}).then(result => {
	console.log(result);
	return result * 2;

}).then(result => {
	console.log(result);
	return result * 2;
}); */


// Ex2: The important is result that is returned
/**
var pro = new Promise((resolve, reject) => {
	resolve(1);
});

let pro2 = pro.then(result => {
	throw new Error('error');
});

pro2.catch(error =>{
	console.log(error);
	console.log(pro2);
}); */


// Ex3:
/**
new Promise((resolve, reject) => {
	setTimeout(() => resolve(1), 1000);

}).then(result => {
	console.log(result); 
	throw new Error('error');

}).catch(error => {
	console.log(error);
	return 2;
}).then(result => {
	console.log(result);
}); */


// 					22-2-2.Returning Promise
// Ex4:

/**
var pro = new Promise((resolve, reject) => {
	setTimeout(() => resolve(1), 1000);
});

var pro2 = pro.then(result => {
	console.log('pro:', pro);
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(2), 1000);
	});
});

var pro3 = pro2.then(result => {
	console.log('pro2:', pro2);
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(3), 1000);
	});
}); */

function myAsync(url) {
	return new Promise((resolve, reject) => {
		// Step 1: create XMLHttpRequest
		const xhr = new XMLHttpRequest();

		// Step 2: make a request
		xhr.open('GET', url);
		xhr.onload = () => resolve(xhr.response);
		xhr.onerror = () => reject(xhr.status);

		xhr.send();
	})
}

myAsync('http://localhost:9081/todos')
	.then(response => console.log(response));