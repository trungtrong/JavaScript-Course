
var readLineSync = require('readline-sync');

function findContact(list, indexNeedToFind) {
	var dataIsFound = readLineSync.question('Your search: ');
	var length = dataIsFound.length;
	
//	// index of contact that need to find
//		indexNeedToFind = [];

	var indexOfContact = -1 ;  // index that mark the position of each contact
	function filterData(contact) {
		indexOfContact++;
		var count = 0 ; // counting amount of letter match
			// if count === length => it totally matches the contact that need to find

		for(var ith = 0; ith < length; ith++) {
			var letterA = contact.name[ith];
			var numberA = contact.phoneNumber[ith];
			var letterB = dataIsFound[ith];
			// debug
			//console.log(letterA, typeof letterA);

			// upper case and lower case is same
			if( letterA.toUpperCase() === letterB.toUpperCase()
				|| numberA === letterB) {
				count++;
			}
		}

		if(count === length) {   
			// only function editContact that need index of contact 
			//that need to find
			if(indexNeedToFind !== undefined) {
				indexNeedToFind.push(indexOfContact);
			}
			return contact;
		}
	}

	return list.filter(filterData);
}



module.exports = findContact;