/************
let options = {
	title: 'Menu',
	width: 100,
	height: 200	
};

let {title, width, height} = options;

console.log(title);
console.log(width);
console.log(height); */


// 					9-2-1: change the order of variables in the left-side
/*******
let options = {
	title: 'Menu',
	width: 100,
	height: 200	
};

let {width, height, title} = options;

console.log(title);
console.log(width);
console.log(height); */

// 				9-2-2: Assigning to new variable names
/*
let options = {
	title: 'Menu',
	width: 100,
	height: 200	
};

let {title, width: w, height: h} = options;

console.log(title);
console.log(w);
console.log(h); */

// 				9-2-3: default value
/*
let options = {
	title: 'Menu',
	width: 100,
	height: 200	
};

let {title, width = 100, height = 200} = options;

console.log(title);
console.log(width);
console.log(height);

console.log(options); */

// 				9-2-4: Unpacking fields from objects  passed ass func parameters

// Ex1
/*********
function userId({id}) {
	return id;
}

var user = {
	id: 42,
	displayName: 'TrongRui',
};

console.log(userId(user)); */

//Ex2:
/********
function whois({displayName, fullName: {firstName: name}}) {
	return `${displayName} is ${name}`;
}

var user = {
	id: 42,
	displayName: 'Rui',
	fullName: {
		firstName: 'Trong',
		lastName: 'Ngo'
	}
};

console.log(whois(user)); */

//				9-2-5: Setting a function parameter's default value
/*********/
function drawChart({size = 'big', coords = {x: 0, y: 1}, radius = 0 } = {}) {
	console.log(size, coords, radius);
}
var canvas = {
	coords: {x: 18, y: 30},
	radius: 30
};
drawChart(canvas); /*/


// 			9-2-6-The rest '...'
/********
let options = {
	title: 'Menu',
	width: 100,
	height: 200	
};

let {title, ...rest} = options;

console.log(title);

console.log(rest);
console.log(rest.width); */


//				9-3: Nested destructuring
/************
let options = {
	size: {
		width: 100,
		height: 200
	},
	items: ['Cake', 'Donut'],
	extra: true
};

// destructuring split in multiple lines
let {
	size,
	size: {
		width,
		height
	},
	items,
	items: [item1, item2],
	title = 'Menu' // not present in the object
} = options;

console.log(size);

console.log(width);
console.log(height);
console.log(items); */


