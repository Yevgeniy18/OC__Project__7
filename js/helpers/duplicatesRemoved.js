class RemoveDuplicates {
	constructor(recipes) {
		this.recipes = recipes.recipes;
		this.ingredientsList = [];
		this.applianceList = [];
		this.ustensilsList = [];
	}

	removeDuplicatesIngredients() {
		let uniqueIngredients = [];

		this.recipes.filter((recipe) =>
			recipe.ingredients.filter((item) => this.ingredientsList.push(item.ingredient))
		);

		this.ingredientsList.forEach((elt) => {
			if (!uniqueIngredients.includes(elt)) {
				uniqueIngredients.push(elt);
			}
		});

		this.ingredientsList = [];

		uniqueIngredients.map((elt) => this.ingredientsList.push(elt));
		return this.ingredientsList;
	}

	removeDuplicatesAppliance() {
		let uniqueAppliances = [];

		this.recipes.filter((recipe) => this.applianceList.push(recipe.appliance));

		this.applianceList.forEach((elt) => {
			if (!uniqueAppliances.includes(elt)) {
				uniqueAppliances.push(elt);
			}
		});

		this.applianceList = [];

		uniqueAppliances.map((elt) => this.applianceList.push(elt));
		return this.applianceList;
	}

	removeDuplicatesUstensils() {
		let uniqueUstensils = [];

		this.recipes.filter((recipe) => recipe.ustensils.map((ustensil) => this.ustensilsList.push(ustensil)));

		this.ustensilsList.forEach((elt) => {
			if (!uniqueUstensils.includes(elt)) {
				uniqueUstensils.push(elt);
			}
		});

		this.ustensilsList = [];

		uniqueUstensils.map((elt) => this.ustensilsList.push(elt));
		return this.ustensilsList;
	}
}
