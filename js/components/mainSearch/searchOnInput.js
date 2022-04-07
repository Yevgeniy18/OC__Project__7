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

		let data = flatten(this.recipes);	

		 let res =  data.find(recipe => recipe.name.toLowerCase().includes(this.searchedRecipe.trim().toLowerCase()))
		 console.log(res.forEach(item => item.name))

		 console.log(typeof(res))


		// res.forEach((recipe) => {
		// 	const Template = new RecipeCard(recipe);
		// 	this.recipesWrapper.appendChild(Template.createRecipeCard());
		// });

		// let res = data.filter(
		// 	(recipe) =>
		// 		recipe.name
			
			
		// 			.includes( removeSpace(this.searchedRecipe).trim().toLowerCase()) ||
		// 	recipe.description
			
				
		// 			.includes( removeSpace(this.searchedRecipe).trim().toLowerCase()) 
		// 			// removeAccents(removeSpace(recipe.ingredient)).trim().toLowerCase().includes(removeSpace(this.searchedRecipe).trim().toLowerCase())

		// );

		// console.log(res)



		// let filteredRes = [];
		// let i = 0;

		// let recipesLength = this.recipes.length;

		// while (i < recipesLength) {
		// 	if (
		// 		removeAccents(this.recipes[i].name)
		// 			.trim()
		// 			.toLowerCase()
		// 			.includes(removeSpace(this.searchedRecipe.trim().toLowerCase())) ||
		// 		removeSpace(removeAccents(this.recipes[i].description))
		// 			.trim()
		// 			.toLowerCase()
		// 			.includes(removeSpace(this.searchedRecipe.trim().toLowerCase())) ||
		// 		this.recipes[i].ingredients.find((elt) =>
		// 			removeSpace(removeAccents(elt.ingredient))
		// 				.trim()
		// 				.toLowerCase()
		// 				.includes(this.searchedRecipe.trim().toLocaleLowerCase())
		// 		)
		// 	) {
		// 		filteredRes.push(this.recipes[i]);
		// 		console.log(filteredRes);
		// 	}

		// 	i++;
		// }

		// Adding advanced searches funtionality for the remaining results after filter

		// if (filteredRes.length > 1) {
		// 	new TagsSection(this.recipes).populateTagsReaminder(filteredRes);
		// }

		// res.forEach((recipe) => {
		// 	const Template = new RecipeCard(recipe);
		// 	this.recipesWrapper.appendChild(Template.createRecipeCard());
		// });
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

			// if (!requestHasWord && this.searchedRecipe.length > 25) {
			// 	new Message().notFound();
			// } else {
			// 	new Message().initial();
			// }

			if (this.searchedRecipe.length === 0) {
				new TagsSection(this.recipes).populateTags(this.recipes);
			}
		});
	}
}
