class SearchOnTag {
	constructor(data) {
		this.recipesWrapper = document.querySelector('.recipe-wrapper');
		this.recipes = data.recipes;
		this.ingredientsList = data.list;
	}

	displayOnTag() {
		let data = this.recipes;
		let ingredientTags = this.ingredientsList;
		let ingredientsList = ingredientTags.map((elt) => elt.toLowerCase());

		let resultList = [];

		for (let i = 0; i < data.length; i++) {
			if (
				data[i].ingredients.find((elt) =>
					elt.ingredient.toLowerCase().includes(ingredientsList.map((elt) => elt))
				)
			) {
				resultList.push(data[i]);

				return [...resultList]
			}
		}

	
	}
}
