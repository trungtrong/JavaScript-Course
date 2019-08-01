var readLindSync = require('readline-sync');
var moment = require('moment');

function addBooks(user) {
	var books = [];
	var newHistory = {};
	while (true) {
	    console.log('--------------------------------------');
	    console.log('');
		console.log("1.Type the information of this book");
		console.log('2.Save and exit');
	
		var selection = readLindSync.question('Your choice:');
		switch (selection) {
			case '1': {
				books = addIntoBookList(books);
				break;
			}
			case '2': {
				newHistory = addIntoBorrowHistory(books, user);
				user.history.push(newHistory);
				break;
			}
		}
		if (selection === '2') {
			break;
		}
	}
	return user;
}

function typeBookInfor() {
	console.log('');
	var name = readLindSync.question("Book's name: ");
	var code = readLindSync.question("Book's code: ");
	var book = {
			id: 0,
			code: code,
			name: name,
			status: false,
		};
	return book;
}

function addIntoBookList(bookList) {
	var bookIsAdded = typeBookInfor();
	var length = bookList.length;
	if (length === 0) {
		bookIsAdded .id = 1;
	}
	else {
		bookIsAdded.id = length + 1; 
	}

	bookList.push(bookIsAdded);
	return bookList;
}

function addIntoBorrowHistory(bookList, user) {
	// history q
	var borrowedTimes = user.history.length;
	var idHistory;
	if (borrowedTimes === 0) {
		idHistory = 1;
	}
	else {
		idHistory = borrowedTimes + 1;
	}

	var startTime = moment();
	var endTime = moment().add(7, 'days');

	var currentHistory = {
			id: idHistory,
			books: bookList,
			status: false, //status that user had or not had borrowed all the books at this time  
			startTime: startTime,
			endTime: endTime,
		};
	console.log('currentHistory: ', currentHistory);
	return currentHistory;
}

module.exports = addBooks;