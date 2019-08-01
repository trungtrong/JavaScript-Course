// require
var findContact = require('./findContact');
var readLineSync = require('readline-sync');

function removeContact(list) {
	// find contact need to be removed
	var indexsNeedToFind = [];
	var contactsNeedToFind = findContact(list, indexsNeedToFind);

	console.log('List of contact that is found:');
	console.log(indexsNeedToFind);
	console.log(contactsNeedToFind);

	console.log('-------------------------');
	var indexIsChosen = readLineSync.question('Contact that need to be removed. Please type its index: ');

	// remove 1 element
	list.splice(parseInt(indexIsChosen), 1);
	return list;
}

module.exports = removeContact;