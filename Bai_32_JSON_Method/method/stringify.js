
// space argument

// =  number
/*********
let meetup = {
	title: "Conference",
	room: {
		number: 23,
		participants: ["John", "Ann"]
	}
};

var data = JSON.stringify(meetup, null, 2);

console.log(data); */

// = string
let meetup = {
	title: "Conference",
	room: {
		number: 23,
		participants: ["John", "Ann"]
	}
};

var data = JSON.stringify(meetup, null, '\t');

console.log(data);