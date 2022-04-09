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

		// Flattening the array to get a faster search through each object

		let flattenedData = flattenEachObject(this.recipes);
		console.log(flattenedData);

		// Array of filtered itemsrecipe.combinedItems
		let filteredArray = flattenedData.filter((recipe) =>
			recipe.combinedItems.find((elt) =>
				removeAccents(removeSpace(elt))
					.trim()
					.toLowerCase()
					.includes(removeSpace(this.searchedRecipe).trim().toLowerCase())
			)
		);

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
