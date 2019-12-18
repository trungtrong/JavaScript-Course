// class P {
// 	constructor(name) {
//   	this.name = name;
//   }
// }

// let person = new P('hi');
// const {name: hima} = person;
// console.log( P instanceof Function );
// console.log(typeof person); 

let name = 'lan';

let user = {
	name: 'trong',
	sayHi() {
		console.log('name', this.name);
	},
	eating() {
		this.sayHi();
	}
}

console.log(user.name);
user.eating();

// let a = user.eating;
// console.log('llala', a());
