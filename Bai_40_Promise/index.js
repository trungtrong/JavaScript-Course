/*******
var temp = Promise.resolve('Success');
 //return promise
console.log(temp);
console.log(typeof temp); */

		// Cach 1: return a thenable
/************
temp.then(function(value) {
	console.log(value);
	// => Success
}); 
***************/

		// Cach 2
// temp.then(value => console.log(value));

/********************************************************/
		// Using a promise is the argument 
		// for that promise
/*******
var cast = Promise.resolve(temp);
console.log(cast);
cast.then(value => console.log(value)); */


		// Reject
/*****
Promise.reject(new Error('fail'))
	.then(function() {
		// not called
	}, function(error) {
		console.log(error);
	});  */


/********************************************************/

		// demonstrating the asynchoronous
/*******
var temp = Promise.resolve('Success');
temp.then(value =>{ 
	console.log('1_' + value);
	return value; 
});

console.log(temp); *******/
/********  Print: 
	First: console.log(temp); => Promise{'Success'}
	Last: console.log('1_' + value) => 1_Success
*********/

/********************************************************/


var resolvedProm = Promise.resolve(33);
var thenProm = resolvedProm.then( value => {
	console.log('this gets called after the end of main stack');
	return value;
});

console.log('1_',thenProm);

setTimeout(() =>{
	console.log('2_'+ thenProm);
});

/*
var p1 = new Promise((resolve, reject) => {
	//resolve('Success');
	//or
	reject (new Error ('Error!'));
});

p1.then( value => {
	console.log(value);
}, reason => {
	console.log(reason);
}); */

/*
var p2 = new Promise((resolve, reject) => {
	resolve(1);
});

var p3 = p2.then(value => {
	console.log(value);
	return value + 1;
}).then(value => { 
	console.log(value +' A synchronous value works');
	return value;
});	

setTimeout(()=>{
console.log(p3);
}); */
/*
Promise.resolve()
	.then( ()=> {
		// make .then() return a rejected promise
		//throw new Error('Oh no!');
		return 1;
	})
	.then( ()=> {
		console.log('Not called');
	}, error => {
		console.error('on rejected function called: ' + error.mmessage);
	}
	);
*/
/*
var p1 = new Promise(function(resolve, reject) {
  resolve('Success');
});

p1.then(function(value) {
  console.log(value); // "Success!"
  throw new Error('oh, no!');
}).catch(function(e) {
  console.log(e.message); // "oh, no!"
}).then(function(){
  console.log('after a catch the chain is restored');
}, function () {
  console.log('Not fired due to the catch');
});
 */

//             Promise.all()

/*/ An empty 
var p = Promise.all([]);  // will be immediately resolved
var p2 = Promise.all([1337, 'hi']); 
// -> non- promise values will be ignored

console.log(p);
console.log('Hello');
console.log(p2);
/*/

/*/
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise( (resole, reject) => {
	//setTimeout(() => {
		resole('foo');
	//}, 100);
});*/

/*/TH1: Promise.all.then
console.log(p3);
var p4 = Promise.all([p1, p2, p3]) .then( values => {
	console.log(values);
});
console.log('hi'); */

/*/TH2: Return Promise.all (no then)
console.log(p3);
var p4 = Promise.all([p1, p2, p3]) .then( values => {
	console.log(values);
});
console.log('hi'); //
setTimeout(() => {
	console.log(p4);
	});
*/

/*
var mixedPromiseArray = [Promise.resolve(33), Promise.resolve(44)];

var p = Promise.all(mixedPromiseArray);
console.log(p);

console.time('This Time');
setTimeout(() => {
	console.log('The stack is now empty');
	console.log(p);
	console.timeEnd('This Time');
},2000); //*/
