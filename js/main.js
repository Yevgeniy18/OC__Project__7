class App {
	constructor() {
		this.recipesApi = new DishesApi('/data/plats.json');
		this.recipeWrapper = document.querySelector('.recipe-wrapper');
	}

	async run() {
		/*****Recipes Data From Json*****/
		const RecipesData = await this.recipesApi.get();

		/*****Initial List of recipes */
		RecipesData.map((recipe) => new Recipe(recipe)).forEach((recipe) => {
			const Template = new RecipeCard(recipe);
			this.recipeWrapper.appendChild(Template.createRecipeCard());
		});

		/***Filtered List of Recipes***/

		new RecipesList(RecipesData).onInputSearch();

		/****Dropdowns****/
		new ExpandingContainers().handleTagDropDowns();

		/***Tags**/
		new Ingredients(RecipesData).populateIngredients()

		/****Tags Data****/
		// new Tags(RecipesData).populateTagContainers();
		// new TagSearch(RecipesData).onInputFilter();
		// new SearchOnTag({recipes: RecipesData}).displayOnTag()

		// new SelectTag(RecipesData).selectingTagsHandler();
	}
}

const app = new App();
app.run();
