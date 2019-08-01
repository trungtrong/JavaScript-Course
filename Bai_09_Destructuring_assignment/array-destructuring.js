// Ex1: 
/*******
let arr = ['Ngo', 'Trong'];

let [firstName, surname] = arr;

console.log(firstName);
console.log(surname); */

// ex2: 
/*********
let [firstName, surname] = 'Ngo Trong'.split(' ');

console.log(firstName);
console.log(surname); */


//			9-1-2:
/********
let arr = ['Ngo', 'Trong'];

let [firstName, surname] = arr;

console.log(firstName);
console.log(surname);

console.log(arr); */

// 			9-1-3: ignore an specific element
/******
let arr = ['Ngo', 'Trung', 'Trong'];

let [firstName, , lastName] = arr;

console.log(firstName, lastName); */


// 			9-1-4: We can use it with any iterable
/*****
let [a, b, c] = "abc";
console.log(a);
console.log(b);
console.log(c); */


// 			9-1-5: We can use ant 'assignales' at the left-side
/**********
let user = {};
[user.name, user.surname] = 'Ngo Trong'.split(' ');

console.log(user); */


//			9-1-6: Looping with Object.entries()
/********
let user = {
	name: 'Trong',
	age: 24
};

for (let[key, value] of Object.entries(user)) {
	console.log(`${key}: ${value}`);
} */


// 			9-1-7: The rest ' ...'
/*********
let arr = [1, 2, 3 ,4];

let[num1, ...rest] = arr;

console.log(num1);
console.log(rest); */


// 			9-1-8: Default value
/*********
let[num1, num2] = [];

console.log(num1);
console.log(num2); */