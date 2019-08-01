// 			11-1-1:the "class syntax"

// Ex1:
/**
class User {
	constructor(name) {
		this.name = name;
	}	

	sayHi() {
		console.log(this.name);
	}
}

let user = new User('John');
user.sayHi();

console.log(typeof User);
console.log(typeof user);

console.log(user.name) */


// Ex2:
/***
class User {
	constructor(name) {
		this.name = name;
	}

	sayHi() {
		console.log(this.name);
	}
}

console.log(new User);

console.log(typeof User);


console.log(User === User.prototype.constructor);
console.log(User.prototype.sayHi);

console.log(Object.getOwnPropertyNames(User.prototype)); */


//						11-1-4-: Class expression

// Ex1:
/*
let User = class {
	constructor(name) {
		this.name = name;
	}

	sayHi() {
		console.log(this.name);
	}
};

let user =  new User('John');

console.log(User.prototype.sayHi);

console.log(user.name); */

// 			2-Named Func Expression
/**
let User = class MyClass {
	constructor(name) {
		this.name = name;
	}

	sayHi() {
		console.log(MyClass);
	}
};			

let user = new User();
user.sayHi();  */

//					11-1-5- Getters/ Setters, other shorthands

// Ex1:
class User {
	constructor(name) {
		this.name = name;
	}

	get fullName() {
		return this.name;
	}

	set fullName(value) {
		if (value.length < 10) {
			console.log('Name is too short');
		}
		this.name = value;
	}
};

let user = new User('John');

console.log(user.fullName);

user.fullname = 'Pete';
console.log(user.fullName);

