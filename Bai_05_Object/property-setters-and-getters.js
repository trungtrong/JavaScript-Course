// 			3-5-1: getter
/**
let user = {
	firstName: 'John',
	surname: 'Smith',

	get fullName() {
		return `${this.firstName} ${this.surname}`
	}
};

console.log(user.fullName); */

// 2. setter
let user = {
	firstName: 'John',
	surname: 'Smith',

	get fullName() {
		return `${this.firstName} ${this.surname}`
	},

	set fullName(value) {
		[this.firstName, this.surname] = value.split(' ');
	}
};

console.log(user.fullName); 

user.fullName = 'Ann Taylor';
console.log(user.firstName);
console.log(user.surname);