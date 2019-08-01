// Database Design
/*var classes = [
	{
		name: '1A',
		teacher: {
			name: 'Quynh',
			age: 30
		},
		students: [
			{ name: 'Khang', birthday: '02/05/2008'},
			{ name: 'Khai', birthday: '07/05/2008'},
			{ name: 'Quang', birthday: '12/06/2008'}
		]
	},
		{
		name: '1B',
		teacher: {
			name: 'Mai',
			age: 30
		},
		students: [
			{ name: 'Tuan', birthday: '02/05/2008'},
			{ name: 'Loan', birthday: '07/05/2008'},
			{ name: 'Trong', birthday: '12/06/2008'}
		]
	},
		{
		name: '1C',
		teacher: {
			name: 'Lan',
			age: 30
		},
		students: [
			{ name: 'Kim', birthday: '02/05/2008'},
			{ name: 'Linh', birthday: '07/05/2008'},
			{ name: 'Quang', birthday: '12/06/2008'}
		]
	}

]; */

// The greater way that use property 'id' : identifier
var classes = [
	{	
		id: 0,
		name: '1A',
		teacher: 0,
	},
	{
		id: 1,
		name: '1B',
		teacher: 1,
	},
	{
		name: '1C',
		teacher: 2,
	}

]; 

var teachers = [
	{	
		id: 0,
		name: 'Quynh',
		age: 30
	},
	{	
		id: 1,
		name: 'Mai',
		age: 30
	},
	{	
		id: 2,
		name: 'Lan',
		age: 30
	}
];

var students = [
	{ id: 0, name: 'Khang', birthday: '02/05/2008', class : 0},
	{ id: 1, name: 'Khai', birthday: '07/05/2008', class : 0},
	{ id: 2, name: 'Quang', birthday: '12/06/2008', class : 0},	
	{ id: 3, name: 'Tuan', birthday: '02/05/2008', class : 1},
	{ id: 4, name: 'Loan', birthday: '07/05/2008', class : 1},
	{ id: 5, name: 'Trong', birthday: '12/06/2008', class : 1},
	{ id: 6, name: 'Kim', birthday: '02/05/2008', class : 2},
	{ id: 7, name: 'Linh', birthday: '07/05/2008', class : 2},
	{ id: 8, name: 'Quang', birthday: '12/06/2008', class : 2}	
];

function getStudentsIncClass(className) {
	var classObject = classes.find(object => 
		object.name === className );
	console.log(classObject);

	var studentsInClass = students.filter(student =>
		student.class === classObject.id);
	return studentsInClass;
}

var listOfStudents = getStudentsIncClass('1A');
console.log(listOfStudents); 
