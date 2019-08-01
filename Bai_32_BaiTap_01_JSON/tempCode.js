
var readLineSync = require('readline-sync');

function findContact(list) {
	var dataIsFound = readLineSync.question('Your search: ');
	var length = dataIsFound.length;
	
	function filterData(contact) {
		var result = false;
		
		var ith ;
		for(ith = 0; ith < length; ith++) {
			if(contact.name[ith] === dataIsFound[ith]
				|| contact.phoneNumber[ith] === dataIsFound[ith]) {
				result = true;
			}
			else result = false;
		}
		if(result === true)
		{
			contact.index = ith;
			return contact;
		}
	}

	return list.filter(filterData);
}



module.exports = findContact;