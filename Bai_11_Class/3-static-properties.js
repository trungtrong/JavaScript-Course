// static

//Ex1:
/**
class User {
	static staticMethod() {
		console.log(this === User)
	}
}

User.staticMethod();

let user = new User();
user.staticMethod(); */


// Ex2:
/**
class Article {
	constructor(title, date) {
		this.title = title;
		this.date = date;
	}

	static compare(articleA, articleB) {
		return articleA.date - articleB.date;
	}
}

// usage
let articles = [
	new Article('HTML', new Date(2019, 11, 1)),
	new Article('CSS', new Date(2019, 0, 1)),
	new Article('JavaScript', new Date(2019, 7, 1))
];

// sorting
articles.sort(Article.compare);

console.log(articles); */

// Ex4: 			Form another static method
/**
class StaticMethodCall {
	static staticMethod() {
		return 'Hello';
	}

	static anotherStaticMethod() {
		console.log(this.staticMethod() + ' Ajinomoto');
	}
}

StaticMethodCall.staticMethod();

StaticMethodCall.anotherStaticMethod(); */


// 					11-3-2: Static properties
/**
class Article {
	static publisher = 'John';
}

console.log(Article.publisher);  */


// 					11-3-3: Statics and Inheritance
class Animal {
	constructor(name, speed) {
		this.speed = speed;
		this.name = name;
	}

	static compare(animalA, animalB) {
		return animalA.speed - animalB.speed;
	}
}

//inherit from Animal
class Rabbit extends Animal {
}

let rabbits = [
	new Rabbit('White', 10),
	new Rabbit('Black', 5)
];

rabbits.sort(Rabbit.compare);
console.log(rabbits);

console.log(Rabbit.__proto__);
console.log(Animal.__proto__ === Function.prototype);
