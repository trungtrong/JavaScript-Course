/**
 * Thiết kế database cho 1 hệ thống quản lý thư viện sách,
  cho biết thư viện này có hàng trăm giá sách khác nhau, sách được để ở bất kì 
  giá nào không theo danh mục nào.
 * Mỗi cuốn sách có 1 mã khác nhau.
 * Hệ thống cho phép đăng ký người dùng mới,
  một người có thể mượn nhiều sách khác nhau 
  trong một khoảng thời gian hữu hạn.
 * Hệ thống có thể lưu lịch sử ai đã mượn sách
  nào, bắt đầu mượn từ bao lâu, trả lúc nào.
 * Hệ thống có lưu lại số ngày quá hạn
  tổng cộng của 1 người dùng, 
  ví dụ sách A quá 2 ngày, sách B quá 3 ngày -> tổng 5 ngày
 */

/***  https://repl.it/@trungtrong/Bai49FinalBasicJS */

// require all the module
var fs = require('fs');
var readLineSync = require('readline-sync');

var register = require('./register');
var signIn = require('./signIn');

// all the styles of books
var genres = [];
// all the books in the library
var books = []; 
// all the information of users
var users = [];
// the user's history that users are borrowed and payed back the books 
var history = [];

// contain the content of books and users
var bookJSON;
var usersJSON;

//Main
genres = checkJSONFile('genres.json');
books = checkJSONFile('books.json');
users =  checkJSONFile('users.json');
main();

// define function
function readJSONFile(path) {
	return fs.readFileSync(path, 'utf8');
}

function pushIntoJSONFile(data, path) {
	// convert object data to string
	var textJSON = JSON.stringify(data);
	fs.writeFileSync(path, textJSON);
}

function checkJSONFile(path) {
	var textJSON = readJSONFile(path);
	// debug
	//console.log('text: ',textJSON);
	if (textJSON !== '') {
		return JSON.parse(textJSON);
	}
	else {
		return [];
	} 
}

function main() {
	while (true) {
		menu();
		var selection = readLineSync.question('Your choice: ');

		switch (selection) {
			case '1': {
				var currentID = users.length;
				var user = register(currentID);
				if (user !== undefined) {
					users.push(user);
				}
				save();	
				break;
			}
			case '2': {
				users = signIn(users);
				save();
				break;
			}
			case '3':
				break;
			case '4':
				break;
			case '5':
				break;
			case '6': {
				console.log(books);
				break;
			}
			case '7': {
				console.log(users);
				break;
			}
			case '8': {
				save();
				break;
			}
			default:{
				break;
			}
		}	
		if (selection === '8') {
			break;
		}
	}
}	

function menu() {
	console.log('');
	console.log('--------------------------------------');
	console.log('1.Register user');
	console.log('2.Sign in user');
	console.log('3.Find the book');
	console.log('4.Type all the information of book genres');
	console.log('5.Type all the information of a book');
	console.log('6.Print all the books');
	console.log('7.Print all the users');
	console.log('8.Save and Exit');
}

function save() {
	pushIntoJSONFile(users, 'users.json');
	pushIntoJSONFile(books, 'books.json');
}