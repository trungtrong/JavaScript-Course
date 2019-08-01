// sorting list of contacts by name
function sortListOfContact(list) {
	list.sort(function(firstElement, secondElement) {
		var nameA = firstElement.name;
		var nameB = secondElement.name;

		if(nameA < nameB) 
			return -1;
		else if(nameA > nameB) 
				return 1;
			else return 0;
	});
	return list;
}

module.exports = sortListOfContact;