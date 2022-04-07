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

		let filteredArray = [];

		let filteredItems = flattenedData.filter((elt) =>
			elt.trim().toLowerCase().includes(this.searchedRecipe.trim().toLowerCase())
		);

		for (let i = 0; i < this.recipes.length; i++) {
			for (let j = 0; j < filteredItems.length; j++) {
				if (this.recipes[i].name === filteredItems[j] || this.recipes[i].description === filteredItems[j]) {
					filteredArray.push(this.recipes[i]);
				}
			}
		}

		filteredArray.forEach((recipe) => {
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

			// const doesContainWord = () => {
			// 	let result = [];

			// 	this.recipes.forEach((recipe) => {
			// 		recipe.ingredients.map((elt) => result.push(removeAccents(elt.ingredient).toLowerCase().trim())) &&
			// 			result.push(removeAccents(recipe.name.toLowerCase().trim())) &&
			// 			result.push(removeAccents(recipe.description.toLowerCase().trim()));
			// 	});

			// 	return result;
			// };

			// let requestHasWord = doesContainWord().includes(this.searchedRecipe.trim().toLowerCase());

			if (this.searchedRecipe.length > 3) {
				this.ShowAvailbaleRecipes();
			} else if (this.searchedRecipe.length < 3) {
				this.ShowInitialList();
			}

		
			if (this.searchedRecipe.length === 0) {
				new TagsSection(this.recipes).populateTags(this.recipes);
			}
		});
	}
}
