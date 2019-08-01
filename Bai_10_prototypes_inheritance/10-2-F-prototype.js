
// Ex1:
/**
let animal = {
	eats: true
};

function Rabbit(name) {
	this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit('White Rabbit');

console.log(rabbit.eats); */

// 			10-2-1: Default F.prototype
// Ex1:
/**
function Rabbit() {}

console.log(Rabbit.prototype.constructor === Rabbit); */

// 2-
// Ex2:
/*
function Rabbit() {}

let rabbit = new Rabbit();

console.log(rabbit.constructor === Rabbit); */


// 3-
// Ex1: 
/*
function Rabbit() {}
Rabbit.prototype = {
	jumps: true
};

let rabbit = new Rabbit();
console.log(rabbit.constructor === Rabbit); */