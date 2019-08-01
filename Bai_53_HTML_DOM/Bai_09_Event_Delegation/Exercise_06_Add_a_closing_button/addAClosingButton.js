let listOfItems = document.querySelector('.item-list');

listOfItems.addEventListener('click', removeItem);

function removeItem(event) {
	let targetButton = event.target;

	if (targetButton.className != 'remove-button') return;

	// improve code
	if (!listOfItems.contains(targetButton)) return;

	let pane = targetButton.parentNode;
	pane.remove();
}

