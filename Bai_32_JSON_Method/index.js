/*/ Exercise 2: Use 3 options that is typed on the keyboard
1. Show all students
=> Save to data.json -> fs.readFileSync

2. Create a new student
Your name?
Your age?
Your class

3. Save and Exit
*/

// Step 1: require modules
var fs = require('fs');  // read/write file
var readLineSync = require('readLine-sync');

//listOfStudents = {'students': [newStudent1, newStudent2]};
var listOfStudents = {};
var textJSON;

// checking file  JSON to review it's empty or not empty
checkFileJSON();
main();

// declare function
function showAllStudents() {

	console.log(listOfStudents);
	pushDataIntoJSON();
}

function createANewStudent() {

	// because listOfStudents.students =[] is local in function checkFileJSON
	var newStudent = {};
	//debug
	//console.log('Debug: newStudent =',newStudent);
	
	// object newStudent {}
	newStudent.name = readLineSync.question('Your name: ');
	
	var age = readLineSync.question('Your age: ');
	newStudent.age = parseInt(age);

	newStudent.class = readLineSync.question('Your class: ');

	// debug
	//console.log('Debug: list = ', listOfStudents);
	
	// push newStudent into array that is also value of key "Students"
	listOfStudents.students.push(newStudent);
	//debug
	//console.log('Debug: list_2',listOfStudents);
}

function pushDataIntoJSON()
{
	textJSON = JSON.stringify(listOfStudents);
	fs.writeFileSync('./data.json', textJSON);
}

function readJSONData()
{
	// Step 2: read data in file data.json
	textJSON = fs.readFileSync('./data.json', {encoding: 'utf8'});
}

function checkFileJSON()
{
	readJSONData();
	if(textJSON === '') {
		listOfStudents.students = [];  // because it's local
		pushDataIntoJSON();
	}
	else {
		readJSONData();
		listOfStudents = JSON.parse(textJSON);
	}
}

// like OPP
function main() {
	while(true)
	{
		console.log('1. Show all students in list.');
		console.log('2. Add a new student into list.');
		console.log('3. Save and Exit.');
		var selection = readLineSync.question('Your choise: ');

		switch(selection)
		{
			case '1': 
				showAllStudents();
				break;
			
			case '2': 
				createANewStudent();
				break;

			case '3':  // save and exit
			// Step 1: save the current data into data.json
				pushDataIntoJSON();
				break;

			default :
				console.log('Wrong selection.Please type on again.')
				break;
		}
		
		if(selection === '3')
		{
			break;
		}	
	}
}