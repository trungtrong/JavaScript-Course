function ask(yes, no) {
	if (confirm('yes?')) {
		yes();
	} else {
		no();
	}
}

function showOk() {
	console.log('Yes');
}

function showCancel() {
	console.log('No');
}

ask(showOk, showCancel);