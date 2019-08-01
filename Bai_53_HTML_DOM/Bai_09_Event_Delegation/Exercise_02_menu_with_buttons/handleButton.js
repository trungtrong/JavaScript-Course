class Menu {
	constructor(elem) {
		console.log(this);
		elem.onclick = this.onClick.bind(this);
	}

	logIn() {
		alert('saving');
	}

	signIn() {
		alert('sign in');
	}

	search() {
		alert('searching');
	}

	onClick(event) {
		let action = event.target.dataset.action;
		if (action) {
			this[action]();
		}
	}
}

new Menu(menu);