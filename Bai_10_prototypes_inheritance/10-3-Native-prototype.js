/**
let arr = [1, 2, 3];
console.log(arr); */

// 				Exercise
//Ex1: Add method 'f.defer(ms)' to function
/* Requirement: 
		Add to the prototype of all functions
	method defer(ms), that runs the function 
 	after ms milliseconds.
*/

/**				Solution
function f() {
	console.log('Hello');
}

// Add to the protype of all functions method defer(ms)
Function.prototype.defer = function(ms) {
	setTimeout(this, ms);
}

// f inherits all properties of Function.prototype
// b/c of this, defer is the method of f
// Also functions are also objects

f.defer(1000); */


// 			Ex2: 
/*
		Add to prototype of all functions the method
		defer(ms) , that returns a wrapper,
		delaying the call by ms milliseconds
*/

function f(a, b) {
	console.log(a + b);
}

// Add to prototype the method defer(ms)
Function.prototype.defer = function(ms) {
	let f = this;

	return function(...args) {  // return a wrapper
		setTimeout(() => f.apply(null, args), ms);
	}
}

f.defer(1000)(1, 2);


