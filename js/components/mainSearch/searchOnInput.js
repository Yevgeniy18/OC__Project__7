class RecipesList {
	constructor(recipe) {
		this.name = recipe;
		this.recipesWrapper = document.querySelector('.recipe-wrapper');
		this.searchField = document.querySelector('.input-search-field');
		this.searchedRecipe = '';
		this.recipes = recipe;
	}

	ShowAvailbaleRecipes() {
		this.recipesWrapper.innerHTML = '';

		// Getting the transformed array
		let flattenedData = flattenEachObject(this.recipes);

		// Filtering array according to user input
		let filteredArray = flattenedData.filter((recipe) =>
			recipe.combinedItems.find((elt) =>
				removeAccents(removeSpace(elt))
					.trim()
					.toLowerCase()
					.includes(removeSpace(this.searchedRecipe).trim().toLowerCase())
			)
		);

		// Removing duplicates and applying rendering visually
		removeDuplicates(filteredArray).forEach((recipe) => {
			const Template = new RecipeCard(recipe);
			this.recipesWrapper.appendChild(Template.createRecipeCard());
		});
	}

	ShowInitialList() {
		this.recipesWrapper.innerHTML = '';

		this.recipes.map((recipe) => new Recipe(recipe)).forEach((recipe) => {
			const Template = new RecipeCard(recipe);
			this.recipesWrapper.appendChild(Template.createRecipeCard());
		});
	}

	onInputSearch() {
		this.searchField.addEventListener('input', (e) => {
			this.searchedRecipe = e.target.value;

			// Checking if the searched recipe contains a result
			// if not, an error message will be displayed in the main section

			let flattenedData = flatten(this.recipes);

			let requestHasWord = flattenedData.find((elt) =>
				elt.trim().toLowerCase().includes(this.searchedRecipe.trim().toLowerCase())
			);

			if (this.searchedRecipe.length > 3) {
				this.ShowAvailbaleRecipes();
			} else if (this.searchedRecipe.length < 3) {
				this.ShowInitialList();
			}

			// If user enters more than 15 characters and the input content doesnt match any results, display the initial results

			if (!requestHasWord && this.searchedRecipe.length > 15) {
				new Message().notFound();
			} else {
				new Message().initial();
			}

			if (this.searchedRecipe.length === 0) {
				new TagsSection(this.recipes).populateTags(this.recipes);
			}
		});
	}
}
