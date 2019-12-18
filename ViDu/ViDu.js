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
*/


// function a() {
//         var name = 1;
//         console.log(this.name);
//     }
//     a();


// console.log(typeof a.__proto__.__proto__);

~function() {
  console.log('Welcome to the Internet. Please follow me.');
}();

var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
console.log(foo.x);
console.log(foo)


a = String(false);
console.log(typeof a);