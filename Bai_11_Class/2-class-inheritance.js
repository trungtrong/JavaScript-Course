
// Ex1: Rabbit inherits from Animal
/**
class Animal {
	constructor(name) {
		this.speed = 0;
		this.name = name;
	}

	run(speed) {
		this.speed += speed;
		console.log(`${this.name} runs with spped ${this.speed}`);
	}

	stop() {
		this.speed = 0;
		console.log(`${this.name} stopped`);
	}
}

class Rabbit extends Animal {
	hide() {
		console.log(`${this.name} hides`);
	}
}

let rabbit = new Rabbit('White Rabbit');

rabbit.run(5);
rabbit.hide(); */

// 			11-2-1: Ex2:
/**
let User = class {
	sayHi() {
		console.log('Hello');
	}
};

class Member extends User {

};

let user = new Member;
user.sayHi(); */


//						11-2-2-Overriding
/**
class MachineFeature {
	makeCoffee() {
		console.log('Make Coffee');
	}
}

class CoffeeMachine extends MachineFeature {
	makeCoffee() {
		console.log(`Coffee is made in 5s`);
	}
}

let machine = new CoffeeMachine();
machine.makeCoffee(); */


//				11-2-3- super keyword
/**
class Animal {
	constructor(name) {
		this.speed = 0;
		this.name = name;
	}

	run(speed) {
		this.speed += speed;
		console.log(`${this.name} has ${this.speed}`);
	}

	stop() {
		this.speed = 0;
		console.log(`${this.name} stopped`);
	}
}

class Rabbit extends Animal {
	hide() {
		console.log(`${this.name} hides`);
	}

	stop() {
		super.stop(); // call parent stop
		this.hide(); // and then hide
	}
}

let rabbit = new Rabbit('White Rabbit');

rabbit.run(5); 
rabbit.stop();  */

// 					11-2-4: Overriding contructor
/**
class Animal {
	constructor(name) {
		this.speed = 0;
		this.name = name;
	}
}

class Rabbit extends Animal {
	constructor(name, earLength) {
		this.name = name;
		this.earLength = earLength;
	}

}

let rabbit = new Rabbit("White", 20);  // Reference Error  */

// Solution
/**
class Animal {
	constructor(name) {
		this.speed = 0;
		this.name = name;
	}
}

class Rabbit extends Animal {
	constructor(name, earLength) {
		super(name);
		this.earLength = earLength;
	}

}

let rabbit = new Rabbit("White", 20)
console.log(rabbit.name);
console.log(rabbit.earLength); */


let animal = {
  name: "Animal",
  eat() {
    console.log(`${this.name} eats.`);
  }
};

let rabbit = {
  __proto__: animal,
  name: "Rabbit",
  eat() {
    // that's how super.eat() could presumably work
    this.__proto__.eat.call(this); // (*)
  }
};

rabbit.eat();
console.log(rabbit.__proto__);
console.log(rabbit.__proto__.eat.call(rabbit));