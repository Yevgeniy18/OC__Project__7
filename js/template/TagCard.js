class TagCard {
	constructor(data) {
		this.name = data;
		this.id = data;
	}

	createIngredientCard() {
		const tagElt = document.createElement('div');
		tagElt.classList.add('ingredient-list');

		const tagElement = `
        <p>${this.name}</p>
        `;

		tagElt.innerHTML = tagElement;
		return tagElt;
	}


	
}
