// 1-3-1.  Declaration
/*var a;
let b;

console.log(a, b); */
/*var a;
let b;
const c;
console.log(a, b, c); */

/****************************************/
// 1-3-2:

//1-3-2-1 			Global Scope

/* var car = 'Vovo';
let animal = 'duck';
const number = 10;
function myF() {
	console.log('car =', car);
	console.log('animal =', animal);
	console.log('number = ', number);
} 

myF();

console.log(animal + 'pig');  */

/****************/
//1-3-2-2 			Function Scope
/*
function myF() {
	var car = 'Vovo';
	let animal = 'duck';
	const number = 10;
	
	console.log(car, animal, number);
} 

myF();

console.log(car + 'bye');
console.log(animal + 'pig');
console.log(number); */

/****************/
//1-3-2-3 			Block Scope
// Ex1 : var
/*{
	var x1 = 5;
}

console.log(x1);

if (true) {
	var x2 = 10; 
}

console.log(x2); */

// Ex2 : let
/*{
	let x1 = 5;
}

console.log(x1);

if (true) {
	let x2 = 10; 
}

console.log(x2); */

// Ex3 : const
/*
{
	const x1 = 5;
}

console.log(x1);

if (true) {
	const x2 = 10; 
}

console.log(x2);  */

/****************/
//1-3-2-4 			Loop Scope

//1- Using "var" in a loop

/*var i =5;
for (var i = 0; i< 10; i++) {

} 

console.log(i);  */

//1- Using "let" in a loop
/*
let i =5;
for (let i = 0; i< 10; i++) {
	console.log(i + '2');
}

console.log(i); */

//1-3-2-5 			Global Variables in HTML


/**************************************************************/
/********************** 1-3-3. Redeclaring */

// Note: Global variable declaring without keyword
/* for (x = 2; x < 10; x++) {
	y = 8;
}

console.log(x);
console.log(y); */


// 1-3-3-1:  var 
/*var x = 10;

for (var x = 0; x < 10 ; x++) {
	var x = 11;
}
console.log(x); */

/******************************* 1-3-3-2:  let */
/*var x = 10;

if (true) {
	let x = 5;
}

console.log(x); */


// In the same scope

/* var x = 2;
let x = 3; // not allowed
 */

/*
function myF() { 
	var x = 2;
	let  x = 3; // not allowed
}
myF(); */

/*
let x = 10;
x = 6;
console.log(x); //run */

/*
car = 10;  //error
let car = 6; */

/*if (true) {
	car = 10;  //error
	let car = 6;
} */

/*car = 10;  // run
var car = 6;
console.log(car); */

// Ex 3 : Redeclaring a let varible with let, in the same scope is not allowed

/*
let x = 2; 
let x = 3; // not allowed
*/
 
/*
if (true) {
	let x = 2; 
	let x = 3;
} */

// Ex 4 : Redeclaring a let varible with var , in the same scope is not allowed

/*let x = 2;
var x = 3; */


/*if (true) {
	let x = 2;
	var x = 3;
} */

// Ex 5 : Redeclaring a let varible , in the another scope is allowed
/*let x = 2;

if (true) {
	let x = 3;
}

function myF() {
	let x = 1;
}

myF();

console.log(x); */


/******************************* 1-3-3-3:  const */
// Redeclaring or reassigning an existing var or let variable to const, 
// in the same scope, or in the same block, is not allowed:

/*var x = 2;
const x = 3; */

/*const x = 2;
var x = 3; */

/*let x = 2;
const x = 3; */

/*const x = 2;
let x = 3; */

// Redeclaring or reassigning an existing const variable,
// in the same scope, or in the same block, is not allowed:

/*const x = 2;
const x = 3; // syntax error
 */

/*const x = 2;
x = 3; */

/*x = 4;
const x = 2; */

//Redeclaring a variable with const, in another scope, or in another block, is allowed:
/*
const x = 2;

if (true) {
	const x = 3;
}

function myF() {
	const x = 4;
}
 
myF();  */

/*
c = 4;
let c;
console.log(c); */


/*c = 4;
const c = 5;
console.log(c); */
function sayHi() {
  phrase = "Hello"; // (*)

    var phrase;
}
sayHi();