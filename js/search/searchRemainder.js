class SearchRemainder {
	constructor(data) {
		this.recipes = data.recipes;

		console.log(this.recipes);

		this.recipesWrapper = document.querySelector('.recipe-wrapper');
		this.selectedList = removeDuplicates(data.selectedTags);
	}

	displayOnTag() {
		this.recipesWrapper.innerHTML = '';

		let listFiltered = [];

		for (let i = 0; i < this.recipes.length; i++) {
			for (let tag = 0; tag < this.selectedList.length; tag++) {
				if (
					this.recipes[i].ingredients.find((ingredient) =>
						ingredient.ingredient.includes(this.selectedList[tag])
					) ||
					this.recipes[i].appliance === this.selectedList[tag] ||
					this.recipes[i].ustensils.find((elt) => elt.includes(this.selectedList[tag]))
				) {
					listFiltered.push(this.recipes[i]);
				}
			}
		}

		removeDuplicates(listFiltered).forEach((elt) => {
			const template = new RecipeCard(elt);
			this.recipesWrapper.appendChild(template.createRecipeCard());
		});
	}
}
