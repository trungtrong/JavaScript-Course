// Step 1: add module find contact
var findContact = require('./findContact');
var readLineSync = require('readline-sync');

// Step 2: choose 1 contact that you want to edit
function editContact(list) {
	// Step 1: add module find contact
	var indexsNeedToFind = [];
	var contactsNeedToFind = findContact(list, indexsNeedToFind);

	console.log('List of contact that is found:');
	console.log(indexsNeedToFind);
	console.log(contactsNeedToFind);
	
	console.log('-------------------------------');
	var indexIsChosen = readLineSync.question('Contact that you want to edit. Please type its index:');

	list[indexIsChosen] = edit(list[indexIsChosen]);
	return list;	
}

function edit(contact) {
	while(true) {
		console.log('---------------------------------');
		console.log('1. Edit name.');
		console.log('2. Edit phone number.');
		console.log('3. Exit');
	
		var selection = readLineSync.question('Your choice: ');
		switch(selection) {
			case '1':
				contact.name = readLineSync.question('Edited Name:');
				break;
			case '2':
				contact.phoneNumber = readLineSync.question('Edited Phone Number: ');
				break;
			case '3':
				break;
		}

		if(selection === '3') 
			break;
	}
	return contact;
}

module.exports = editContact;