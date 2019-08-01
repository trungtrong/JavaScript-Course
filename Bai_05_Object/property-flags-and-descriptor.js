// 			3-4-1- Property flags

// Ex1: Object.getOwnPropertyDescriptor(obj, propertyName)
/**
let user = {
	name: 'John'
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(descriptor); */


// To change these flags: Object.defineProperty(obj, propertyName, descriptor)

// Ex1: If the above property exist
/**
let user = {
	name: 'John'
};

Object.defineProperty(user, 'name', { value: 'Pete'});
console.log(user);

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(descriptor); */

//Ex2: If the above property doesn't exist
/**
let user = {};

Object.defineProperty(user, 'name', { 
	value: 'Pete',
	enumerable: true
});
console.log(user);

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(descriptor);
console.log(user); */

// 					3-4-2: Read-only
/**
let user = {
	name: 'John'
};

Object.defineProperty(user, 'name', {
	writable: false
});

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(descriptor);

user.name = 'Pete';
console.log(user); */


// 			3-4-3: Non-enumerable
/**
let user = {
	name: 'John',
	toString() {
		return this.name;
	}
};

Object.defineProperty(user, 'toString', {
	enumerable: false
});

console.log(user); */

//			3-4-4: Non-configurable
// Ex1:
/**
let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

console.log(descriptor); */

// Ex2:
let user = {};

Object.defineProperty(user, 'name', {
	value: 'Pete',
	writable: false,
	enumerable: true,
	configurable: true
});

console.log(user);

delete user.name;
console.log(user);

/*
Object.defineProperty(user, 'name', {
	writable: true
}); */