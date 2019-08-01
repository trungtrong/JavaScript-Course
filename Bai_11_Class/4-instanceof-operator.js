/*******
class User {

}

let rabbit = new User();

console.log(rabbit instanceof User);
console.log(rabbit instanceof Object);

console.log(rabbit.__proto__.__proto__ === Object.prototype);

console.log(rabbit instanceof Function); // false
****************/

class User {}

console.log(User instanceof Function);
console.log(User.__proto__ ===  Function.prototype)