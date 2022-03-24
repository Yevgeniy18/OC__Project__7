class App {
	constructor() {
		this.recipesApi = new DishesApi('/data/plats.json');
		this.recipeWrapper = document.querySelector('.recipe-wrapper');
	}

	async run() {
		// Data
		const RecipesData = await this.recipesApi.get();

		// Recipes List
		RecipesData.map((recipe) => new Recipe(recipe)).forEach((recipe) => {
			const Template = new RecipeCard(recipe);
			this.recipeWrapper.appendChild(Template.createRecipeCard());
		});

		// Main Search
		new RecipesList(RecipesData).onInputSearch();

		// Dropdowns
		new ExpandingContainers().handleTagDropDowns();

		// Advanced Search
		new TagsSection(RecipesData).populateTags()
		
	}
}

const app = new App();
app.run();
