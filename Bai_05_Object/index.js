// 						3.1.4- Property value shorthand
/**********
function makeUser(name, age) {
	return {
		name,
		age
	};
}

let user = makeUser('John', 30);
console.log(user); */


// 3.1.5. Existence Check

/*let user = {};
console.log(user.name); */

// 						3-1-7- Coping by Reference

/*
let user = {name: 'John'};
let admin = makeUserer;

admin.name = 'Pete';
console.log(user.name); */


//				3-1-9: Copying  an object

/*let user = {
	name: 'John',
	age: 30
};

let clone = {}; // the empty object

// let's copy all user properties to it
for (let key in user) {
	clone[key] = user[key];
}

clone.name = 'Pete';

console.log(clone);

console.log(user); */


// 3-1-10- 					Object.assign

// Ex1: clone an object

/*let user = {
	name: 'John',
	age: 30
};

let clone =  Object.assign({}, user);

clone.name = 'Pete';
console.log('clone:', clone);
console.log('user: ', user); */


// Ex2: Merge several object into one
/*
let user = {
	name: 'John',
	age: 30
};

let info1 = {sex: 'male'};
let info2 = {health: 'great'};

Object.assign(user, info1, info2);

console.log(user); */
