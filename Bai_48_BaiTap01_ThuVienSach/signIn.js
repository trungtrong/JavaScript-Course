var readLindSync = require('readline-sync');
var moment = require('moment');
var addBooks = require('./addBooks');
var editInforOfUser = require('./editInforOfUser');

function signIn(userList) {
	var user = findUser(userList);
	if (user === undefined ) {
		console.log('User ID is non-exist.');
	}
	else {
		var index = user.id; 

		console.log("The user's information:");
		console.log(user);
		while(true) {
			menu();
			var selection = readLindSync.question('Your choice:');
			switch (selection) {
				case '1': {
					user = addBooks(user);
					userList = saveInforOfUser(userList, user, index);
					break;
				}
				case '2': {
					printBooksBorrowed(user);
					break;	
				}
				case '3': {
					user = editInforOfUser(user);
					break;
				}
				case '4': {
					break;
				}
				case '5': {
					break;
				}
			}
			if (selection === '5') {
				break;
			}
		}
		return userList;
	}
}

function findUser(userList) {
	var code = readLindSync.question("Type user's code:");
	var user = userList.find(user => user.code === code);
	return user;
}

function menu() {
	console.log('--------------------------------------');
	console.log('1.Type books that user want to borrow.');
	console.log('2.Print all the books that user has borrowed.');
	console.log("3.Edit user's information.");
	console.log("4.Edit the information of user's books");
	console.log('5.Exit');
}

function printBooksBorrowed(user) {
	var booksIsBorrowed = user.history;
	console.log(booksIsBorrowed);
} 

function saveInforOfUser(userList, user, index) {
	userList[index] = user;
	return userList;
}

module.exports = signIn;