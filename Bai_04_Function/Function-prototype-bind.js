// Problem when using "this" outside the object
/***********
let user = {
	firstName: 'John',
	sayHi() {
		console.log(`Hello ${this.firstName}`);
	}
};

setTimeout(user.sayHi, 1000); // Hello undefine
*/

/***************************************************/

// solution: Using bind()

// Ex1:
/***********
let user = {
	firstName: 'John',
	sayHi() {
		console.log(`Hello ${this.firstName}`);
	}
};

let sayHi = user.sayHi.bind(user);

setTimeout(sayHi, 1000);*/

// Ex2: 
/*
let user = {
	firstName: 'John'
};

function func() {
	console.log(this.firstName);
}

let funcUser = func.bind(user);
funcUser(); */

// Ex3: 
/*****
let user = {
	firstName: 'John'
};

function func(phrase) {
	console.log(phrase, this.firstName);
}

let funcUser = func.call(user);
funcUser('Hello'); */


// Ex4: 
/*******
global.x = 9;

var module = {
	x: 81,
	getX() {
		console.log(this.x);
	}
};

var retrieveX = module.getX;
retrieveX();

var boundGetX = retrieveX.bind(module);
boundGetX(); */

// Ex5: 
function f() {
  console.log(this.name);
}

f = f.bind( {name: "John"} ).bind( {name: "Pete"} );

f();