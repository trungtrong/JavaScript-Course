
let user = {
	name: 'John',
	age: 30,
	sayHi() {
		console.log(this.name);
	}
};

user.sayHi(); 



function print() {
	var name = 'red';
	console.log(this.name);
}


print();