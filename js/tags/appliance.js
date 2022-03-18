class Appliance {
	constructor(data) {
		this.recipes = data;
		this.applianceList = document.querySelector('.appliance-list');
		this.selectedTags = document.querySelector('.selected-tags');
		this.selectedIngredientsList = [];
	}

	populateAppliance() {
		let applianceList = [];
		let normalizedList = [];
		let selectedList = [];

		// filtering appliance

		this.recipes.filter((recipe) =>
                applianceList.push(recipe.appliance)
          
		);

		applianceList.forEach((ingredient) => {
			if (!normalizedList.includes(ingredient)) {
				normalizedList.push(ingredient);
			}
		});

		const ingredientsData = ` ${normalizedList
			.map((ingredient) => {
				return `<p>${ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}</p>`;
			})
			.join(' ')}
    `;

		this.applianceList.innerHTML = ingredientsData;
	}
}
