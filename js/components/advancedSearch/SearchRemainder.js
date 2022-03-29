class SearchRemainder {
	constructor(data) {
		this.selectedList = data.selected;
		this.remainingData = data.recipes;

		this.recipesWrapper = document.querySelector('.recipe-wrapper');
	}

	displayOnTag() {
		if (this.selectedList.length === 0) {
			this.recipesWrapper.innerHTML = '';

			this.remainingData.map((elt) => new Recipe(elt)).forEach((recipe) => {
				const Template = new RecipeCard(recipe);
				this.recipesWrapper.appendChild(Template.createRecipeCard());
			});
		} else {
			this.recipesWrapper.innerHTML = '';
			let listFiltered = [];
			for (let i = 0; i < this.remainingData.length; i++) {
				for (let tag = 0; tag < this.selectedList.length; tag++) {
					if (
						this.remainingData[i].ingredients.find((ingredient) =>
							ingredient.ingredient.includes(this.selectedList[tag])
						) ||
						this.remainingData[i].appliance === this.selectedList[tag] ||
						this.remainingData[i].ustensils.find((elt) => elt.includes(this.selectedList[tag]))
					) {
						listFiltered.push(this.remainingData[i]);
					}
				}
			}
			removeDuplicates(listFiltered).forEach((elt) => {
				const template = new RecipeCard(elt);
				this.recipesWrapper.appendChild(template.createRecipeCard());
			});
		}
	}
}
