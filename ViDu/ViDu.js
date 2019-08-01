/*/ include library file mouse.js
var Mouse = require('./mouse');


function Cat() {
	this.stomach = [];
}

Cat.prototype.eat = function(mouse){
	this.stomach.push(mouse);
	mouse.die(); // call common property
};

var mickey = new Mouse('Black');
var jerry = new Mouse('Orange');

console.log(mickey);
console.log(jerry);

var tom = new Cat;
tom.eat(mickey);
console.log(tom); 

