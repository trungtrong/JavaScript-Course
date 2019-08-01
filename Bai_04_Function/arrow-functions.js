/**********************************************
global.foo = 1;

var a = {
	foo: 'bar',
	run: function() {
		// function context
		setTimeout(function() {
			console.log(this.foo);
		}, 2000)
	}
};

a.run(); // undefined, don't relative to global context(object)
*************************************************/

//						5-10-1: Syntax
// For instance, a func expression
/*var sum = function(a, b) {
	console.log(a + b);
};

sum(3, 2); // 5  */

// 				Basic syntax
// Method 1.1:
/*var sum = (a, b) => {
	console.log(a + b);
};
sum(3, 2);  */

// Method 1.2:
/*
var sum = (a, b) => a + b;

console.log(sum(3, 2)); */

// Method 1.3.1:
/*
var square = (x) => {console.log(x*x)}; 
square(3); */

// Method 1.3.2
/*
var square = (x) => x*x;
console.log(square(3)); */

// Method 1.3.3
/*
var square = x => console.log(x*x);
square(3); */

// Method 1.3.2
/*
var square = x => x*x;
console.log(square(3)); */


// Method 1.4: no parameter
/*
var print = () => {console.log(10)};
print();*/


//					2. Advanced Syntax
// 2.1
/*
var print = () => ({foo: 'bar'});
console.log(print()); */

// 2.2: rest para and default para
/*
var sum = (...args) => {
	return args.reduce((accum, arg) => accum + arg, 0);
};

console.log(sum(1, 2, 3, 4, 5 )); */


//				5-10-2: Arrow functions have no "this"

// For instance, a regular function
/**
var obj = {
	name: 'John',
	run: function() {
		var run2 = function() {
			console.log(this.name);  // undefined
		}

		run2(); 
	}
};

obj.run();  */

// Solution 1: Using func.bind()
/**
var obj = {
	name: 'John',
	run: function() {
		var run2 = function() {
			console.log(this.name);
		}

		run2.bind(this)();
	}
};

obj.run();
*/

// solution 3: using the arrow func
/**
var obj = {
	name: 'John',
	run: function() {
		var run2 = () => {
			console.log(this.name);
		}

		run2();
	}
};

obj.run(); */

//			Ex2: about arr.forEach()
/**
let group = {
	title: 'Our Group',
	students: ['John', 'Ann', 'Pete'],

	showList() {
		this.students.forEach(function(student) {
			console.log(this.title + ':' + student);
		})
	}
};

group.showList(); */


// Ex3: setTimeout()
/**
var obj = {
	foo: 'bar',
	run: function() {
		setTimeout(function() {
			console.log(this.foo);  // undefined
		}, 1000);
	}
};

obj.run(); */

// Solution 1: using func.bind()
/* var obj = {
	foo: 'bar',
	run: function() {
		setTimeout(function() {
			console.log(this.foo);
		}.bind(this), 1000);
	}
};

obj.run(); */

// Solution2  : arrow func
/**
var obj = {
	foo: 'bar',
	run: function() {
		setTimeout(() => {
			console.log(this.foo);
		}, 1000);
	}
};

obj.run(); */

//							5-10-3: Arrow func can't run with new
/**
var Foo = () => {};
var f = new Foo(); */

//							5-10-4: Arrow func have no 'argument'

// Ex1:
/**
function foo() {
	var f = () => arguments[0] + arguments[1];
	return f();
}

console.log(foo(1, 2)); */

// instead of that, using "rest para" is a good alternative

/*
function foo(n) { 
  var f = (...args) => args[0] + n;
  return f(10);  //  <----
}

foo(1); */

// 				5-10-5: Arrow funcs used as methods
// Ex1:
var obj = {
	i: 10,
	b: () => console.log(this.i, this),  
	c: function() {
		console.log(this.i, this)
	}
};

obj.b(); // undefined {} 
// b/c arrow func b() , have no own 'this'