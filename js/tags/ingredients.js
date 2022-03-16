class Ingredients {
	constructor(data) {
		this.recipes = data;
		this.ingredientList = document.querySelector('.ingredients-list');
		this.selectedTags = document.querySelector('.selected-tags');
	}

	populateIngredients() {
		let ingredientList = [];
		let normalizedList = [];

		// filtering ingredients

		this.recipes.filter((recipe) =>
			recipe.ingredients.map((ingredient) => ingredientList.push(ingredient.ingredient))
		);

		ingredientList.forEach((ingredient) => {
			if (!normalizedList.includes(ingredient)) {
				normalizedList.push(ingredient);
			}
		});

		const ingredientsData = 
		` ${normalizedList
			.map((ingredient) => {
				return `<p>${ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}</p>`;
			})
			.join(' ')}
        `;

		this.ingredientList.innerHTML = ingredientsData;
	}
}
