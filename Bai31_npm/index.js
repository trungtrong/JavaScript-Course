// npm- node package manager

// require module
var readLineSync = require('readLine-sync');

/*
var userName = readLineSync.question('Your name: ');
console.log('Hi ' + userName + '!' ); */

/*/ creating object Pet
var pet = {};
var name = readLineSync.question('Your Pet name: ');
var sexual = readLineSync.question('Sexual of Pet: ');
var weight = readLineSync.question('Weight of Pet:');

// adding the property into object
pet.name = name;
pet.sexual = sexual;
pet.weight = parseInt(weight);

console.log(pet);
**********************************************/
/*var password = readLineSync.question('PassWord: ',{hideEchoBack: true});
console.log(password);

var password = readLineSync.prompt();
console.log(password); */

/*/var input = readLineSync.keyIn('Hit 1..5 key: ', {limit: '$<1-9>'});
//var input = readLineSync.keyIn('Hit 1..5 key: ');
var input = readLineSync.question('Hit 1..5 key: ', 
	{ limit: /song.txt$/i,
	  limitMessage: 'Sorry, $<lastInput> is not text file.'
	});
console.log(input);  */
/*
readLineSync.setDefaultOptions({limit: ['green', 'yellow', 'red']});
var firstColor = readLineSync.question('Which color of signal? ');
console.log(firstColor); */

/*var lang = readLineSync.question('Which language? ',{defaultInput: 'javascript'});
console.log(lang); 
*/

/* var answer = readLineSync.question('How do you like it? ',{
	trueValue: ['yes', 'yeah', 'yep'],
	falseValue: ['no', 'nope', 'nah']
}); */

var answer = readLineSync.question('How do you like it? ', {
	trueValue: 'hello',
	falseValue: 5
},
{ caseSensitive: true });

if (answer === true) {
	console.log('Let\'s go!');
}
else if (answer === false) {
	console.log('Oh....It\'s ok....');
}
else {
	console.log('Sorry. What does "' + answer+ '" you said mean');
}