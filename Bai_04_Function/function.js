// 		Function Declaration
/*print();

console.log('bye');

function print() {
	console.log('hi');
} */

// 		Function Expression

/*****************
print2();  //=> ReferenceError
console.log('lla')
console.log('bye');

let print2 = function () {
	console.log('hi');
} */

/*****************
print();  //=> ReferenceError
console.log('lla')
console.log('bye');

var print = function () {
	console.log('hi');
*/
/*
var factorial = function fac(n) {
	return n < 2 ? 1 : n * fac(n - 1);
}

console.log(factorial(3)); */
/*
function map(f, a) {
  var result = []; // Create a new Array
  var i; // Declare variable
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}
let f = function(x) {
   return x * x * x; 
}
var numbers = [0, 1, 2, 5, 10];
var cube = map(f,numbers);
console.log(cube);  */

/************** Function Scope *****************/ 
/*************
if (true) {
	console.log('bye');
	
	function print() {
		console.log('hi');
	}
}

print();

**************/

/**************
function see() {
	console.log('bye');
	
	function print() {
		console.log('hi');
	}
}

print(); */

/****** Function Expression *********/ 
/****************
if (true) {
	console.log('bye');
	
	let print = function() {
		console.log('hi');
	}
}

print(); // ReferenceError */

"use strict";
if (true) {
	console.log('bye');
	
	function print() {
		console.log('hi');
	}
}
 
print(); 
