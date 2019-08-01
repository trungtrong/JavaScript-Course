/**********
let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}

name = "Pete";

sayHi(); */
/*
function makeCounter() {
	let count = 0;

	return function() {
		return count++;
	}	
}

let counter = makeCounter();

console.log(counter());

console.log(counter()); */


// Exercise 1: Write a function "sum"
// sum(a)(b) = a + b
//Ex: sum(1)(2) = 3

/***** Solution
function sum(num1) {
	return function(num2) {
		return num1 + num2;
	}
}

console.log(sum(1)(2));  */


// Exercise 2: 
// Using arr.filter(f) for arrays.

// 1. write arr.filter(inBetween(a, b))  
// => selects only values between a and b and equal to them

//  Ex: arr = [1, 2, 3, 4, 5, 6] 
//  arr.filter(inBetween(3, 6)); // [3, 4, 5, 6]
/*******
function inBetween(a, b) {
	return function(item) {
		return item >= a && item <= 6;
	}
}

let arr = [1, 2, 3, 4, 5, 6];

console.log(arr.filter(inBetween(3, 6)));  */

/*						****************** 					*/
// 2. write arr.filter(inArray([a, b, c,...]))
//=> selects only element matching with one of the elements in an array

// Ex: arr = [1, 2, 3, 4, 5,6]
// arr.filter(inArray([1, 2, 10])); // [1, 2]
/********
function inArray(anotherArr) {
	return function(item) {
		return anotherArr.includes(item);
	}
}

let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.filter(inArray([1, 2, 10]))); */



// Exercise 3: Sort by Field
function byField(fieldName) {
	return function(a, b) {
		return a[fieldName] > b[fieldName] ? 1 : -1;
	}
}

let users = [
	{ name: 'John', age: 20, surname: 'Johnson'},
	{ name: 'Pete', age: 18, surname: 'Peterson'},
	{ name: 'Ann', age: 29, surname: 'Hathaway'},
];

console.log(users.sort(byField('name')));