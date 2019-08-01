//ex1
/**********/
function showNumber() {
	console.log(arguments);
	console.log(arguments.length);

	console.log(arguments[0]);
	console.log(arguments[1]);
}

showNumber(1, 'hello', 3, 'bye'); /*/

/*
function f() {
	let showArg = () => console.log(arguments[0]);
	showArg();
}

f(1); */


// arrow function: don't have 'arguments'
/*
let showArg = () => console.log(arguments[0]);
showArg(1); */
