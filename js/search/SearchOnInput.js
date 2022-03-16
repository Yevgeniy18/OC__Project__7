class RecipesList {
	constructor(recipe) {
		this.name = recipe;
		this.recipesWrapper = document.querySelector('.recipe-wrapper');
		this.searchField = document.querySelector('.input-search-field');
		this.searchedRecipe = '';
		this.recipes = recipe;
	}

	async ShowAvailbaleRecipes() {
		this.recipesWrapper.innerHTML = '';

		this.recipes
			.filter(
				(recipe) =>
					removeAccents(recipe.name)
						.trim()
						.toLowerCase()
						.includes(this.searchedRecipe.trim().toLowerCase()) ||
					removeAccents(recipe.description)
						.trim()
						.toLowerCase()
						.includes(this.searchedRecipe.trim().toLowerCase()) ||
					recipe.ingredients.find((elt) =>
						removeAccents(elt.ingredient)
							.trim()
							.toLowerCase()
							.includes(this.searchedRecipe.trim().toLowerCase())
					)
			)
			.forEach((recipe) => {
				const Template = new RecipeCard(recipe);
				this.recipesWrapper.appendChild(Template.createRecipeCard());
			});

		function returnWithFilter(array, selected) {
			return array.filter(
				(recipe) =>
					recipe.ingredients.find((elt) =>
						elt.ingredient.toLowerCase().includes(selected.trim().toLowerCase())
					) ||
					recipe.description.trim().toLowerCase().includes(selected.trim().toLowerCase()) ||
					recipe.name.trim().toLowerCase().includes(selected.trim().toLowerCase())
			);
		}

		function returWithForEach(array, selected) {
			let newArray = [];

			array.forEach((recipe) => {
				if (
					recipe.ingredients.find((elt) =>
						elt.ingredient.toLowerCase().includes(selected.trim().toLowerCase())
					) ||
					recipe.description.trim().toLowerCase().includes(selected.trim().toLowerCase()) ||
					recipe.name.trim().toLowerCase().includes(selected.trim().toLowerCase)
				) {
					newArray.push(recipe);
				}
			});

			return newArray;
		}

		function ReduceResult(array, selected) {
			let result = array.reduce((newArray, current) => {
				if (
					current.ingredients.find((elt) =>
						elt.ingredient.toLowerCase().includes(selected.trim().toLowerCase())
					) ||
					current.name.trim().toLowerCase().includes(selected.trim().toLowerCase()) ||
					current.description.trim().toLowerCase().includes(selected.trim().toLowerCase())
				) {
					newArray.push(current);
				}

				return newArray;
			}, []);

			return result;
		}
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


			let doesContain = this.recipes.filter(
				(recipe) =>
					removeAccents(recipe.name)
						.trim()
						.toLowerCase()
						.includes(this.searchedRecipe.trim().toLowerCase()) ||
					removeAccents(recipe.description)
						.trim()
						.toLowerCase()
						.includes(this.searchedRecipe.trim().toLowerCase()) ||
					recipe.ingredients.map((elt) => removeAccents(elt.ingredient).trim().toLowerCase())
			);

			const doesContainWord = () => {
				let result = [];

				this.recipes.forEach((recipe) => {
					recipe.ingredients.map((elt) => result.push(removeAccents(elt.ingredient).toLowerCase().trim())) &&
						result.push(removeAccents(recipe.name.toLowerCase().trim())) &&
						result.push(removeAccents(recipe.description.toLowerCase().trim()));
				});

				return result;
			};


			let requestHasWord = doesContainWord().includes(this.searchedRecipe.trim().toLowerCase())
	

			// doesContain.find(elt => removeAccents(elt.name).trim().toLowerCase().includes)

			if (this.searchedRecipe.length > 3) {
				this.ShowAvailbaleRecipes();
			} else if (this.searchedRecipe.length < 3) {
				this.ShowInitialList();
			}  

			if( !requestHasWord  && this.searchedRecipe.length > 10){
				console.log('something is wrong with your surh')
			} 

		//  else {
		// 		return;
		// 	}
		});
	}
}
