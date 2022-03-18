class Ingredients {
	constructor(data) {
		this.recipes = data;
		this.ingredientList = document.querySelector('.ingredients-list');
		this.selectedTags = document.querySelector('.selected-tags');
		this.selectedIngredientsList = [];
	}

	populateIngredients() {
		let ingredientList = [];
		let normalizedList = [];
		let selectedList = [];

		// filtering ingredients

		this.recipes.filter((recipe) =>
			recipe.ingredients.map((ingredient) => ingredientList.push(ingredient.ingredient))
		);

		ingredientList.forEach((ingredient) => {
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

		this.ingredientList.innerHTML = ingredientsData;

		const addToTagList = (e) => {
			const tag = e.target.innerHTML;
			selectedList.push(tag);
			new DisplayTags(selectedList).listItems();
			new SearchOnTag({recipes: this.recipes, list: selectedList}).displayOnTag(tag)
		};

		const removeTag = (array, e) => {
			console.log('removing tag');
			let tag = e.target.innerHTML;

			for (let i = 0; i < array.length; i++) {
				if (array[i] === tag) {
					array.splice(i, 1);
				}
			}
		};

		for (let tag of this.ingredientList.children) {
			tag.addEventListener('click', addToTagList);
		}
	}
}
