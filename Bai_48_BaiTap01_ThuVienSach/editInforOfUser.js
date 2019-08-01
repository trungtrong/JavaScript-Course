var readLindSync = require('readline-sync');

function editInforOfUser(user) {
	while(true) {
		menu();
		var selection = readLindSync.question('Your choice: ');
		switch (selection) {
			case '1':
				user.name = editName();
				break;
			case '2':
				user.phoneNumber = editPhoneNumber();
				break;
			case '3':
				break;
		}
		if (selection === '3') {
			break;
		}
	}
	return user;
}

function menu() {
	console.log('--------------------------------------');
	console.log('');
	console.log("1.Edit user's name");
	console.log("2.Edit user's phone number");
	console.log('3.Exit');
}

function editName() {
	var name = readLindSync.question("New user's name: ");
	return name;
}

function editPhoneNumber() {
	var phoneNumber = readLindSync.question("New user's phone number: ");
	return phoneNumber;
}

module.exports = editInforOfUser;
