// Ex1 : Array from a String
var arr = Array.from('foo');
console.log(arr);

/***********************************/
//Ex2: Array from an Array-like object (arguments)

function f() {
	console.log(Array.from(arguments));
}

f(1, 2, 3);