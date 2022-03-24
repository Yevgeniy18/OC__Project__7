class Tags {
	constructor(data) {
		this.recipes = data;
		this.ingredientList = [];
		this.toolList = [];
		this.ustensilsList = [];

		/****Retrieving Tag  Containers***/

		this.ingredientContainer = document.querySelector('.ingredient__container');
		this.applianceContainer = document.querySelector('.tools__container');
		this.ustensilsContainer = document.querySelector('.ustensils__container');
	}

	populateTagContainers() {
		/***Filtering for Ingredients and removing duplicates  */

		this.recipes.filter((recipe) => recipe.ingredients.filter((item) => this.ingredientList.push(item.ingredient)));

		const checkForDuplicatedIngredients = () => {
			let uniqueIngredients = [];

			this.ingredientList.forEach((elt) => {
				if (!uniqueIngredients.includes(elt)) {
					uniqueIngredients.push(elt);
				}
			});

			this.ingredientList = [];
			uniqueIngredients.map((item) => this.ingredientList.push(item));

			const containerTemplate = `
			<div class="ingredient-list">
			${this.ingredientList
				.map((ingredient) => {
					return `<p>${ingredient}</p>`;
				})
				.join(' ')}
			</div>
			`;

			this.ingredientContainer.innerHTML = containerTemplate;
			return this.ingredientContainer;
		};

		checkForDuplicatedIngredients();

		/*****Ingredients Tag Boxes******/

		/*
		 * Ii the searched item lengtn is greater than 1 character, only the filtered items are displayed, 
		else we get the initial list of ingredients in the container
		 */

		/***Filtering for Tools and removing duplicates  */

		this.recipes.filter((recipe) => this.toolList.push(recipe.appliance));

		const checkForDuplicatesAppliance = () => {
			let uniqueIngredients = [];
			this.toolList.forEach((elt) => {
				if (!uniqueIngredients.includes(elt)) {
					uniqueIngredients.push(elt);
				}
			});

			this.toolList = [];
			uniqueIngredients.map((item) => this.toolList.push(item));

			const applianceTemplate = `
			<div class="tools-list">
			${this.toolList
				.map((ingredient) => {
					return `<p>${ingredient}</p>`;
				})
				.join(' ')}
			</div>
			`;

			this.applianceContainer.innerHTML = applianceTemplate;
			return this.applianceContainer;
		};

		checkForDuplicatesAppliance();

		/***Filtering for Ustensils and removing duplicates  */

		this.recipes.filter((recipe) => recipe.ustensils.map((item) => this.ustensilsList.push(item)));

		const checkForDuplicatedUstensils = () => {
			let uniqueIngredients = [];

			this.ustensilsList.forEach((elt) => {
				if (!uniqueIngredients.includes(elt)) {
					uniqueIngredients.push(elt);
				}
			});

			this.ustensilsList = [];
			uniqueIngredients.map((item) => this.ustensilsList.push(item));

			const ustensilsTemplate = `
			<div class="ustensils-list">
			${this.ustensilsList
				.map((ingredient) => {
					return `<p>${ingredient}</p>`;
				})
				.join(' ')}
			</div>
			`;

			this.ustensilsContainer.innerHTML = ustensilsTemplate;
			return this.ustensilsContainer;
		};

		checkForDuplicatedUstensils();
	}
}
