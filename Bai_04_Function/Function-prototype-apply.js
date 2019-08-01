// Ex2: Using arguments
/*********
function sum() {
	const numbers = Array.from(arguments);
	return numbers.reduce((accum, num) => accum + num, 0);
}

function average() {
	//Step 1: sum
	const total = sum.apply(null, arguments);

	return total / arguments.length;
}

console.log(average(1, 2, 3, 6)); */


// Ex3: Using apple() to append an existing array
/*****
let array = ['a', 'b'];
let elements = [0, 1, 2];

array.push.apply(array, elements);
console.log(array); */

// Ex4: Math
/****
let numbers = [5, 6, 2, 3, 7];
var max = Math.max.apply(null, numbers);

console.log(max); */


/*****************************************************/
// 				5-8-4: Borrowing method
// Ex1: Problem 1
/*
function hash() {
	console.log(arguments.join());
}

console.log(hash(1, 2, 3)); */

// Ex2
/*********8
var arr = [];
// case 1:
arr.push.call(arr, [1, 2]);
console.log(arr); // [ [1,2] ]

// case 2
arr.push.apply(arr,  [1, 2]);
console.log(arr); // [1, 2];
*/

function work(a, b) {
	console.log(a + b);
}

function spy(func) {
	let cache = []; // cache

	return function wrapper(...args) {
		cache.push(args);
		wrapper.calls = cache;
		func(...args);
	}
}

// function spy(func) {

//   function wrapper(...args) {
//     wrapper.calls.push(args);
//     return func.apply(this, arguments);
//   }

//   wrapper.calls = [];

//   return wrapper;
// }


work = spy(work);

work(1, 2);
work(4, 5);

for (let args of work.calls) {
	console.log('call:' + args.join());
}