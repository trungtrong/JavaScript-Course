let selectedTd;

chart.addEventListener('click', onClick);

function onClick(event) {
	let target = event.target;
	// if not <td> element
	if (target.tagName != 'TD') return;

	// improve code
	if (!chart.contains(target)) return;
	
	hightlight(target);
}

function hightlight(td) {
	// remove the existing hightlight target
	if (selectedTd) {
		selectedTd.classList.remove('hightlight');
	}

	selectedTd = td;
	selectedTd.classList.add('hightlight');
}