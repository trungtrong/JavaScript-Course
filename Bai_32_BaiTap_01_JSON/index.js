/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên 
 (không dấu hoặc có dấu, chữ hoa hoặc chữ thường 
 vẫn cho ra kết quả) hoặc 1 phần số điện thoại
*/
// Step1 : require 2 modules : fs and readline-sync
var fs = require('fs'); // to read/ write data from file contact.json
var readLineSync = require('readline-sync');

var sortList = require('./sortList');
var findContact = require('./findContact');
var editContact = require('./editContact');
var removeContact = require('./removeContact');
/***********************************/

var listOfContacts = [];
var textJSON ;  // save the JSON data

// Step 1: checking data of file JSON
checkFileJSON();
main();

function readFileJSON() {
	return fs.readFileSync('contact.json', { encoding: 'utf8'});
}

function pushIntoFileJSON() {
	textJSON = JSON.stringify(listOfContacts);
	fs.writeFileSync('./contact.json', textJSON);
}

function checkFileJSON() {
	textJSON = readFileJSON();
	if(textJSON === '') {
		pushIntoFileJSON();
	}
	else {
		listOfContacts = JSON.parse(textJSON);
	}
}

function createANewContact() {
	var contact = {};
	contact.name = readLineSync.question('Your name: ');
	contact.phoneNumber = readLineSync.question('Your phone number: ');

	// push into list Of contact
	listOfContacts.push(contact);
}

function showAllContact(list) {
	pushIntoFileJSON(list);
	console.log(list);
}

function menu() {
 	console.log('1. Type a contact (name, phone number).');
 	console.log('2. Search a contact.');
 	console.log('3. Edit data of a contact.');
 	console.log('4. Delete a contact.');
 	console.log('5. Show all contact.');
 	console.log('6. Save and Exit.');
}

function main() {
	while(true) {
		menu();
		var selection = readLineSync.question('Your choice: ');
		
		switch(selection) {
			case '1':
				createANewContact();
				listOfContacts = sortList(listOfContacts);
				break;
			case '2':
				var contactsNeedFind = findContact(listOfContacts);
				console.log(contactsNeedFind);
				break;
			case '3':
				listOfContacts = editContact(listOfContacts);
				break;
			case '4':
				listOfContacts = removeContact(listOfContacts);
				break;
			case '5':
				showAllContact(listOfContacts);
				break;
			case '6':
				pushIntoFileJSON();
				break;
			default : break;
		}

		listOfContacts = sortList(listOfContacts);

		if(selection === '6')
		{
			break;  // get out of the while loop
		}		
	}
}

