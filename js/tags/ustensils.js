class Ustensils {
	constructor(data) {
		this.recipes = data;
		this.ustensilsList = document.querySelector('.ustensils-list');
		this.selectedIngredientsList = [];
	}

	populateUstensils() {
		let ustensilsList = [];
		let normalizedList = [];
		let selectedList = [];

		// filtering ustensils

		this.recipes.filter((recipe) => recipe.ustensils.map(ustensil => ustensilsList.push(ustensil)));

		ustensilsList.forEach((ingredient) => {
			if (!normalizedList.includes(ingredient)) {
				normalizedList.push(ingredient);
			}
		});

		const ustensilsData = ` ${normalizedList
			.map((ingredient) => {
				return `<p>${ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}</p>`;
			})
			.join(' ')}
`;

		this.ustensilsList.innerHTML = ustensilsData;
	}
}
