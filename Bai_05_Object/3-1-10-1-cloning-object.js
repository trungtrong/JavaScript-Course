
// 2: Using spread operator
/*
var obj1 = {
	name: 'John',
	age: 30
};

var clonedObj2 = { ...obj1};
console.log(clonedObj2); */

// 3-1-10-1:  		Deep Clone

/* 
let obj1 = {
	name: {
		firstName: 'John',
		surname: 'Taylor'
	},
	age: 30

};

let obj2 = {};

for (let key in obj1) {
	obj2[key] = obj1[key];
}

console.log('obj2: ', obj2);

obj2.name.firstName = 'Ann';

console.log('obj1: ', obj1);
console.log('obj2:', obj2); */

let obj1 = {
	name: {
		firstName: 'John',
		surname: 'Taylor'
	},
	age: 30

};

// let obj2 = {};

// Using recursive

function cloneObject(origin, clone) {
	clone = {};
	
	for (let key in origin) {
		if (typeof origin[key] === 'object') {
			clone[key] = cloneObject(origin[key], clone[key]);
		} else {
			clone[key] = origin[key];
		}
	}

	return clone;
}

let obj2;
obj2 = cloneObject(obj1, obj2);

console.log('obj2: ', obj2);

obj2.name.firstName = 'Anna';
obj1.name.firstName = 'lala';

console.log('obj1: ', obj1);
console.log('obj2:', obj2);