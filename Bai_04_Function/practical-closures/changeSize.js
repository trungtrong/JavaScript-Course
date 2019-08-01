var size12 = document.querySelector('.size-12');

var size14 = document.querySelector('.size-14');

var size16 = document.querySelector('.size-16');

// Using closure

function makeSizer(size) {
	return function() {
		document.body.style.fontSize = size + 'px';
	}
}

var make12 = makeSizer(12);
var make14 = makeSizer(14);
var make16 = makeSizer(16);

size12.addEventListener('click', make12);

size14.addEventListener('click', make14);

size16.addEventListener('click', make16);