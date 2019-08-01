document.body.onload = addElement;

function addElement() {
	//Step 1: create a new div element
	var newDiv = document.createElement('div');

	// Step 2: give it some content
	var newDivContent = document.createTextNode('Hi there and greeting');

	// Step 3: add the text node to the newly created 'div'
	newDiv.appendChild(newDivContent);

	// Step 4: add the newly created element and its content into the DOM
	var currentDiv = document.getElementById('div1');
	document.body.insertBefore(newDiv, currentDiv);
}