
// Ex1:
/***
let promise = new Promise(function(resolve, reject) {
	setTimeout(() => resolve("done"), 1000);
});

console.log('Hi');
console.log(promise);
*/

// Ex2:
/*let temp =  Promise.resolve("done");
console.log(temp);*/


// 				22-2-2. Consuming then, catch, finally
	//		1. then
// Ex1:
/**
let promise = new Promise(function(resolve, reject) {
	setTimeout( () => resolve('done!'));
});

// resolve runs the first func in .then
console.log(promise);
promise.then(
	result => console.log(result),
	error => console.log(error)	
);  
console.log(promise); */


// Ex2:
/**
let promise = new Promise(function(resolve, reject) {
	setTimeout( () => reject(new Error('whoops')), 1000);
});

promise.then(
	result => console.log(result),
	error => console.log(error)	
); */


// Ex3: 
/**
let promise = new Promise(function(resolve, reject) {
	setTimeout( () => resolve('done!'));
});

promise.then(result => console.log(result)); */


//			2. catch
// Ex1: 
/***
let promise = new Promise((resolve, reject) => {
	setTimeout(() => reject(new Error('Whoops')), 1000);
});

//
promise.catch(error => console.log(error)); */


setTimeout(()=>{
Promise.resolve(1).then(()=>console.log('This is promise resolve'));
}, 0);

setTimeout(()=>{
console.log('this is callback 2');
}, 0);

console.log('this is a text');

setTimeout(()=>{
console.log('this is callback 3');
}, 0);

setTimeout(()=>{
console.log('this is callback 4');
}, 0);
