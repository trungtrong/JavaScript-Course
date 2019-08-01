// Decorator
/*****************
function slow(x) {
	console.log(`Called with ${x}`);
	return x;
}

function cachingDecorator(func) {
	let cache = new Map();

	return function(x) {
		// console.log('ui',cache);
		if (cache.has(x)) {
			// console.log('lala');
			return cache.get(x);
		}

		let result = func(x);

		cache.set(x, result);

		console.log(cache);
		// console.log('hihi');
		return result;
	}
}

slow = cachingDecorator(slow);

console.log(slow(1)); // cachingDecorator -> slow

console.log(slow(1)); // cachingDecorator -> cachingDecorator -> slow

console.log(slow(2)); 

***************************************/

// 5-8-2- Using Function.prototype.call
/*************
let worker = {
	someMethod() {
		return 1;
	},

	slow: function(x) {
		console.log('Called with ' + x);
		return x * this.someMethod();
	}
};

function cachingDecorator(func) {
	let cache = new Map();

	return function(x) {
		if (cache.has(x)) {
			return cache.get(x);
		}

		let result = func(x);
		cache.set(x, result);
		console.log(cache);

		return result;
	}
}

console.log(worker.slow(1));

worker.slow = cachingDecorator(worker.slow);

console.log(worker.slow(2)); 

**************/

// Ex1: We call sayHi in the context of different objects
/******
function sayHi() {
	console.log(this.name);
}

let user = { name: "John"};
let admin = { name: "Admin"};

sayHi.call(user);
sayHi.call(admin); */

// Ex2: with  the given context and an argument for that function
/****
function say(phrase) {
	console.log(this.name + ': ' + phrase);
}

let user = { name: "John"};

say.call(user, "Hello"); */


// Ex4:
/********
function Product(name, price) {
	this.name = name;
	this.price = price;
}

function Food(name, price) {
	Product.call(this, name, price);
	this.category = 'food';
}

function Toy(name, price) {
	Product.call(this, name, price);
	this.category = 'toy';
}

var cheese = new Food('feta', 5);
var fun =  new Toy('robot', 40);

console.log(cheese);
*******/


// Ex5:
/*******
function greet() {
	var reply = [this.animal, 'typically sleep between ', this.sleepDuration].join('');
	console.log(reply);
}

var obj = {
	animal: 'cats',
	sleepDuration: '12 and 16 hours'
};

greet.call(obj); */


// Ex6: can't use the value of this, that is context of Global object
/****
var sdata = 'Wisen';

function displayData() {
	console.log(`data = ${this.sdata}`);
}

displayData.call(); */


// Ex7: If you don't use 'this', using call() as a normal function

function display(name, age) {
	console.log(name, 'and', age);
}

display.call(null, 'Trong', 24); 