counter.addEventListener('click', modifyAmount);

let amount = document.querySelector('.amount');

function modifyAmount(event) {

	if (event.target.dataset.decrease != undefined) {
		if (amount.value > 1) { 
			amount.value--;
		}
	}

	if (event.target.dataset.increase != undefined) {
		if (amount.value < 100) { 
			amount.value++;
		}
	}
}