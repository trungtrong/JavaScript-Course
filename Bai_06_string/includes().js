// Ex1: case- sensitivity
/*********
console.log('Blue Whale'.includes('blue'));
*/

//Ex2:
/********
console.log('Widget with id'.includes('with'));
*/

var sentence = 'The quick brown fox';

var word = 'fox';

console.log(`The word "${word}" 
	${sentence.includes(word) ? 'is' : 'is not'} in the sentence`)