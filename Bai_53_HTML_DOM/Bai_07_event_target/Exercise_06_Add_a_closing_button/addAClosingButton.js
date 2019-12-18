let items = document.querySelectorAll('.item');
// querySelector => find the first element that matches


for (let item of items) {
	let removeButton = item.firstElementChild;
	removeButton.addEventListener('click', removeItem);
}

function removeItem() {
	let removedItem = this.parentNode;
	removedItem.remove();
}

