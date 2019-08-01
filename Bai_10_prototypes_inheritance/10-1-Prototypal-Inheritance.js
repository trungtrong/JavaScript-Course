// Ex1: 
/**
let animal = {
	eats: true
};

let rabbit = {
	jumps: true
};

rabbit.__proto__ = animal;

console.log( rabbit.eats );
console.log( rabbit.jumps );

console.log( animal ); // no change

console.log(rabbit); // no change   
*/

// Ex2: If we have a method in animal, it can be called on rabbit object
/**
let animal = {
	eats: true,
	walk() {
		console.log("Animal walk");
	},
};

let rabbit = {
	jumps: true,
	__proto__: animal
};

rabbit.walk(); */

// Ex3: the prototype chain can be longer
/**
let animal = {
	eats: true,
	walk() {
		console.log('Animal Walk');
	}
};

let rabbit = {
	jumps: true,
	__proto__: animal
};

let longEar = {
	earLength: 10,
	__proto__: rabbit
};

console.log(longEar.jumps);

longEar.walk(); */



// 				10-1-2: Writing doesn't use prototype

// Ex1: can't edit / delete the data properties of the prototype object
/**
let animal = {
	eats: true,
	walk() {
	}
};

let rabbit = {
	__proto__: animal
};

rabbit.walk = () => console.log('Hello Ajinomoto');
rabbit.walk();

rabbit.eats = false;

console.log('rabbit: ', rabbit);
console.log('animal:', animal); */

// Ex2: but it's not for the accessor property
/**
let user = {
	name: 'John',
	surname: 'Smith',

	set fullName(value) {
		[this.name, this.surname] = value.split(' ');
	},

	get fullName() {
		return `${this.name} ${this.surname}`;
	}
};

let admin = {
	isAdmin: true,
	__proto__: user
};

// get
console.log(admin.fullName); // this = user
console.log('admin:', admin); 

// set
admin.fullName = 'Ann Scope';
console.log('admin:', admin);

console.log('user:', user);


console.log(admin.fullName); // this = admin  */

//				10-1-4: For...in loop and Object method

// Ex1:
/**
let animal = {
	eats: true
};

let rabbit = {
	jumps: true,
	__proto__: animal
};

// for...in loop
for (let prop in rabbit) {
	console.log('for..in :', prop);
}

// Object method
console.log('Object method: ', Object.keys(rabbit));  */

let animal = {
  eats: true
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

for(let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    console.log(`Our: ${prop}`); // Our: jumps
  } else {
    console.log(`Inherited: ${prop}`); // Inherited: eats
  }
}
