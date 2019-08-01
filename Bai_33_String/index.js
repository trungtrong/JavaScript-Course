/*
var str = new String('Hello World');
var bye = new String('Hello World');
var hello = 'Hello World';
console.log(str === bye);
console.log(str === hello);

console.log('hello length = ', hello.length);

for(var ith = 0; ith < hello.length - 1; ith++)
{
	console.log(hello[ith]);
}

var you = "You said 'Hello' with me";
console.log(you); 
***********************/

/*/ indexOf
var str = 'Hello World';
console.log(str.indexOf('el', 2));
console.log(str.indexOf('' ,2));
console.log(str.indexOf('E')); 
*/

/*/ lastIndenOf()
var str = 'Hello World';
console.log(str.lastIndexOf('o', 5));
console.log(str.lastIndexOf('', 2));
*/

/*
var a = 'hello';
var b =  a.toUpperCase();
console.log(a);
console.log(b);

var c = String.prototype.toUpperCase.call(true);
console.log(c, typeof c);
*/

// string.slice()
//var hello = 'Good morning ,Tedx Sandeago';
// slice()
//var aPart = hello.slice(5);
//console.log(aPart);

/*/ substring
var sub = hello.substring(-5, -3);
console.log("'"+sub+"'"); */

/*/ substr
var sub = hello.substr(2, -1);
console.log(sub); */

// split() : coverting a String to an Array
//var hello = 'Good morning';

// Case 1: separator is ommited or does not occur in string
/*var newArray = hello.split(); 
console.log(newArray);
=> arr =['Good Morning'] 
*/

//Case 2: separator is empty string
/*var newArray = hello.split(''); 
// or hello.split('/')
console.log(newArray);
*/

/*/Case 3: separator is any character in string
var newArray = hello.split(['d']); 
console.log(newArray); 

var myString = 'this|is|a|test';
var arr = myString.split(['|']);
console.log(arr);

//var he = String(['a','b']);
//console.log(he, typeof he);
var hello = 'ca,bca,bc';
var newArray = hello.split(['a','b']);
console.log(newArray); */


// 				Exersice 2: in school . Bai50 / second
/*/ Viết hàm để viết hoa chữ cái đầu của từng từ trong câu
function capitalize(str) {
	// Step 1: split all letters and remove 'space'
  var arr = str.split(' ');
  // Step 2: using toUpperCase for each first character 
  // in each element
  var newString = arr.map(toUpperCaseForFirstCharac).join(' ');
  console.log(newString);
  //return newArr;
}

function toUpperCaseForFirstCharac(element) {
	var firstCharacter = element[0].toUpperCase();
	var newElement = firstCharacter.concat(element.slice(1));
	// hoac element.substring(1);
	// C2: firstCharacter + element.slice(1);
	return newElement;
}

capitalize('hi there, how is it going'); 
******************************/
//			startsWith()
/*var str = 'Java Motorola';
console.log(str.startsWith('Java'));
console.log(str.startsWith('Mo', 5));
console.log(str.startsWith('Java', 2));
**********************/

var obj = {
	a: 2,
	b: 2,
	c: 1,
	d: 2
};

for (var key in obj) {
	if (obj[key] !== 2) {
		console.log('1');
		break;///
	}
	else {
		console.log('2');
	}
}