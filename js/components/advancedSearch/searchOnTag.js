class SearchOnTag {
	constructor(data) {
		this.recipesWrapper = document.querySelector('.recipe-wrapper');
		this.recipes = data.recipes;
		this.selectedList = data.selected;
	}

	displayOnTag() {
		if (this.selectedList.length === 0) {
			this.recipesWrapper.innerHTML = '';

			this.recipes.map((elt) => new Recipe(elt)).forEach((recipe) => {
				const Template = new RecipeCard(recipe);
				this.recipesWrapper.appendChild(Template.createRecipeCard());
			});
		} else {
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

}