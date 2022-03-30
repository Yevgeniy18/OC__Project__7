class Message {
	constructor() {
		this.recipesWrapper = document.querySelector('.recipe-wrapper');
	}

	notFound() {
		let errorMsg = `<p class="error-msg">
		Aucun résultat corréspond à votre recherche, vous pouvez essayez "tarte aux pommes", "poisson"..
		</p>
		`;

		this.recipesWrapper.innerHTML = errorMsg;
		this.recipesWrapper.style.justifyContent = 'center';
		this.recipesWrapper.style.minHeight = '70vh';
		this.recipesWrapper.style.alignItems = 'center';
	}

	initial() {
		this.recipesWrapper.style.justifyContent = 'space-between';
		this.recipesWrapper.style.minHeight = '100vh';
		this.recipesWrapper.style.alignItems = 'baseline';
	}
}