//			the 'name' property

// Ex1:
/*******
function sayHi() {
	console.log('hi');
}

console.log(sayHi.name); */


// Ex2:  Func Expression
/*******
let sayHi = function() {
	console.log('hi');
}

console.log(sayHi.name); */

// Ex3: function is a default value
/********8
function f(sayHi = function() {}) {
	console.log(sayHi.name);
}

f(); */


// Ex4: Object method has names too
/********
let user = {
	sayHi() {

	},

	sayBye: function() {

	}
}

console.log(user.sayHi.name);

console.log(user.sayBye.name); */

/********************************************************/

// 5-7-2. the "length" property
/*********
function f1(a) {}
console.log(f1.length);

function f2(a, b) {}
console.log(f2.length);

// Ex2: for rest parameter, it is not counted

function f3(a, b, ...rest) {}
console.log(f3.length) */

// 5-7-3. the custom property

// Ex1: we add the 'counter property' to track the total calls count
function sayHi() {
 	console.log('hi')
 	sayHi.counter++;
}

// initial value, assign 
sayHi.counter = 0;

// call
sayHi();
sayHi();

console.log(`called ${sayHi.counter}`); // count how many sayHi is called 