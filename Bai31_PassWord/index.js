var generatePassword = require('password-generator');

//
//var password = generatePassword();  // default 10 characters
//var password = generatePassword(8);  // default 10 characters
//var password = generatePassword(8, false); // uppercase and lowercase 
//var password = generatePassword(8, true); // only lowercase
var password = generatePassword(8, true, /[\d]/g);

console.log(password);