class TagSearch {
	constructor(recipe) {
		this.recipes = recipe;


		this.mainSearchField= document.querySelector('.input-search-field')

		/*****Ingredients***/
		this.ingredientTagInput = document.querySelector('.input__field__ingredients');
		this.ingredientsContainer = document.querySelector('.ingredient__container');
		this.searchedIngredients = '';
		this.ingredientList = new RemoveDuplicates(this.recipes).removeDuplicatesIngredients();

		/****Appliance****/
		this.ApplianceTagInput = document.querySelector('.input__field__tools');
		this.searchedAppliance = '';
		this.applianceContainer = document.querySelector('.tools__container');
		this.applianceList = new RemoveDuplicates(this.recipes).removeDuplicatesAppliance();

		/****Ustensils****/
		this.UstensilsTagInput = document.querySelector('.input__field__ustensils');
		this.searchedUstensils = '';
		this.ustensilsContainer = document.querySelector('.ustensils__container');
		this.ustensilsList = new RemoveDuplicates(this.recipes).removeDuplicatesUstensils();
	}

	//Searching Ingredients

	async showSearchedIngredients() {
		this.ingredientsContainer.innerHTML = '';
		this.ingredientList
			.filter((ingredient) => ingredient.toLowerCase().includes(this.searchedIngredients.toLowerCase()))
			.forEach((ingredient) => {
				const ingredientCard = new TagCard(ingredient);
				this.ingredientsContainer.appendChild(ingredientCard.createIngredientCard());
			});
	}
	async showInitialIngredients() {
		this.ingredientsContainer.innerHTML = '';

		const ingredientsData = `
		<div class="ingredient-list">

		${this.ingredientList
			.map((ingredient) => {
				return `<p>${ingredient}</p>`;
			})
			.join(' ')}

		</div>
		`;

		this.ingredientsContainer.innerHTML = ingredientsData;
		return this.ingredientsContainer;
	}

	//Searching Appliance

	async showSearchedAppliance() {
		this.applianceContainer.innerHTML = '';
		this.applianceList
			.filter((ingredient) => ingredient.toLowerCase().includes(this.searchedAppliance.toLowerCase()))
			.forEach((ingredient) => {
				const applianceCard = new TagCard(ingredient);
				this.applianceContainer.appendChild(applianceCard.createIngredientCard());
			});
	}

	async showInitialAppliance() {
		this.applianceContainer.innerHTML = '';

		const applianceData = `
		<div class="ingredient-list">

		${this.applianceList
			.map((appliance) => {
				return `<p>${appliance}</p>`;
			})
			.join(' ')}

		</div>
		`;

		this.applianceContainer.innerHTML = applianceData;
		return this.applianceContainer;
	}

	//Searching Ustensils

	async showSearchedUstensils() {
		this.ustensilsContainer.innerHTML = '';
		this.ustensilsList
			.filter((ustensil) => ustensil.toLowerCase().includes(this.searchedUstensils.toLowerCase()))
			.forEach((ustensil) => {
				const ustensilCard = new TagCard(ustensil);
				this.ustensilsContainer.appendChild(ustensilCard.createIngredientCard());
			});
	}

	async showInitialUstensils() {
		this.ustensilsContainer.innerHTML = '';

		const ustensilsData = `
		<div class="ingredient-list">

		${this.ustensilsList
			.map((ustensil) => {
				return `<p>${ustensil}</p>`;
			})
			.join(' ')}

		</div>
		`;

		this.ustensilsContainer.innerHTML = ustensilsData;
		return this.ustensilsContainer;
	}

	onInputFilter() {
		this.ingredientTagInput.addEventListener('input', (e) => {
			this.searchedIngredients = e.target.value;
			this.mainSearchField = e.target.value
			console.log(this.mainSearchField)

			if (this.searchedIngredients.length > 0) {
				this.showSearchedIngredients();
			} else if (this.searchedIngredients.length < 1) {
				this.showInitialIngredients();
			}
		});

		this.ApplianceTagInput.addEventListener('input', (e) => {
			this.searchedAppliance = e.target.value;

			if (this.searchedAppliance.length > 0) {
				this.showSearchedAppliance();
			} else if (this.searchedAppliance.length < 1) {
				this.showInitialAppliance();
			}
		});

		this.UstensilsTagInput.addEventListener('input', (e) => {
			this.searchedUstensils = e.target.value;

			if (this.searchedUstensils.length > 0) {
				this.showSearchedUstensils();
			} else if (this.searchedUstensils.length < 1) {
				this.showInitialUstensils();
			}
		});
	}
}
