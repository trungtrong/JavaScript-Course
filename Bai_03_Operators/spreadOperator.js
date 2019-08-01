// function

/*function myF(a, b, c) {
	console.log('Hi', a, b, c);
}

var array = [1, 2, 3];

myF(...array); */

/*
function myF(a, b, c) {
	console.log('Hi', a, b, c);
}

var obj = {
	name: 'miu',
	color: 'black',
	owner: 'trong'
};

myF(...obj.color); */

var parts = [2, 3];
var list = [1, ...parts, 4, 5];
console.log(list);
