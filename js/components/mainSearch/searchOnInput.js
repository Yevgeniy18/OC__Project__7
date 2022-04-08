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

		let flattenedData = flatten(this.recipes);

		// Array of filtered items
		let filteredArray = [];

		// Filtering process based on what was entered into the input field

		let filteredItems = flattenedData.filter((elt) =>
			removeAccents(elt).trim().toLowerCase().includes(this.searchedRecipe.trim().toLowerCase())
		);

		// Checking whether the original data items match the filtered items
		// and then pushing to the filtered Array defined above

		for (let i = 0; i < this.recipes.length; i++) {
			for (let j = 0; j < filteredItems.length; j++) {
				if (
					this.recipes[i].name === filteredItems[j] ||
					this.recipes[i].description === filteredItems[j] ||
					this.recipes[i].ingredients.find((elt) => elt.ingredient === filteredItems[j])
				) {
					filteredArray.push(this.recipes[i]);
				}
			}
		}

		if(filteredArray.length > 1 ){
			new TagsSection(this.recipes).populateTagsRemainder(filteredArray)
		}

		// Once the matched results are pushed into the FilteredArray,
		//forEach method is applied to build up the desired template

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
