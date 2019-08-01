var readLineSync = require('readline-sync');
var moment = require('moment');
function registerUser(currentID) {
	var user;
	while (true) {
		console.log('');
		console.log('--------------------------------------');
		registerMenu();
		var selection = readLineSync.question('Your choice: ');

		switch (selection) {
			case '1': {
				user = typeInformation(currentID);
				break;
			} 
			case '2': { 
				break;
			}
			default: {
				break;
			}
		}
		if(selection === '2') {
			break;
		}
	}
	return user;
}

function registerMenu() {
	console.log('');
	console.log('--------------------------------------');
	console.log("1.Type all user's information");
	console.log('2.Exit');
}

function typeInformation(currentID) {
	var name = readLineSync.question('user name: ');
	var phoneNumber = readLineSync.question('Phone Number: ');
	var id;
	var code;
	if (currentID === 0) {
		id = 0;
		code = (1000000 + 1).toString();
	}
	else {
		id = currentID;
		code = (1000000 + currentID + 1).toString();
	}

	var start = moment();
	var end = moment().add(1, 'years');

	var userInfor = {
		id: id,
		code: code,
		name: name,
		phoneNumber: phoneNumber,
		history: [],
		accountStatus: {
			start: start,
			end: end
		}
	};
	return userInfor;
}

module.exports = registerUser;