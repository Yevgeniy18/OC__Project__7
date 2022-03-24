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

		let filteredRes = this.recipes.filter(
			(recipe) =>
				removeSpace(removeAccents(recipe.name))
					.trim()
					.toLowerCase()
					.includes(removeSpace(this.searchedRecipe).trim().toLowerCase()) ||
				removeSpace(removeAccents(recipe.description))
					.trim()
					.toLowerCase()
					.includes(removeSpace(this.searchedRecipe).trim().toLowerCase()) ||
				recipe.ingredients.find((elt) =>
					removeSpace(removeAccents(elt.ingredient))
						.trim()
						.toLowerCase()
						.includes(removeSpace(this.searchedRecipe).trim().toLowerCase())
				)
		);

		// Adding advanced searches funtionality for the remaining results after filter

		if (filteredRes.length > 1) {
			new TagsSection(this.recipes).populateTagsReaminder(filteredRes)
		}

		if (filteredRes.length === 0){
			new TagsSection(this.recipes).populateTags()
		}

		filteredRes.forEach((recipe) => {
			const Template = new RecipeCard(recipe);
			this.recipesWrapper.appendChild(Template.createRecipeCard());
		});
	}

	async ShowInitialList() {
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

			const doesContainWord = () => {
				let result = [];

				this.recipes.forEach((recipe) => {
					recipe.ingredients.map((elt) => result.push(removeAccents(elt.ingredient).toLowerCase().trim())) &&
						result.push(removeAccents(recipe.name.toLowerCase().trim())) &&
						result.push(removeAccents(recipe.description.toLowerCase().trim()));
				});

				return result;
			};

			let requestHasWord = doesContainWord().includes(this.searchedRecipe.trim().toLowerCase());

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
		});
	}
}
