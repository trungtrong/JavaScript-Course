// Ex1: function
/*******
function sum(a, b) {
	return a + b;
}

console.log(sum(1, 2, 3, 4, 5)); */

// Ex1: 
/********
function sumAll(...args) {
	let sum = 0;
	console.log(args);
	for (let arg of args) {
		sum += arg;
	}

	return sum;
}

console.log(sumAll(1, 2, 3, 4)); */

// Ex2: 

function showNumber(num1, num2, ...titles) {
	console.log(num1, num2);

	console.log(titles);

	console.log(titles[0]);
}

showNumber(1, 2, 3, 4, 5);
