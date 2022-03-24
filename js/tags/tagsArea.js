class TagsSection {
	constructor(data) {
		this.data = data;
		//List Conatianers
		this.ingredientContainer = document.querySelector('.ingredients-list');
		this.applianceContainer = document.querySelector('.appliance-list');
		this.ustensilsContainer = document.querySelector('.ustensils-list');

		//List of selectedTags
		this.selectedTags = document.querySelector('.selected-tags');

		// CombinedTag
		this.combineSelected = [];
	}

	populateTags() {
		//Ingredients
		let ingrediensList = [];
		let normalizedIngredients = [];
		//Appliance
		let applianceList = [];
		let normalizedAppliance = [];
		//Ustensils
		let ustensilsList = [];
		let normalizedUstensils = [];

		this.data.filter((recipe) => {
			recipe.ingredients.map((ingredient) => ingrediensList.push(ingredient.ingredient));
		});

		normalizedIngredients = removeDuplicates(ingrediensList);

		const ingredientsData = ` ${normalizedIngredients
			.map((appliance) => {
				return `<p>${appliance.charAt(0).toUpperCase() + appliance.slice(1)}</p>`;
			})
			.join(' ')}
			`;

		this.ingredientContainer.innerHTML = ingredientsData;

		this.data.filter((recipe) => applianceList.push(recipe.appliance));
		normalizedAppliance = removeDuplicates(applianceList);

		const applianceData = ` ${normalizedAppliance
			.map((appliance) => {
				return `<p>${appliance.charAt(0).toUpperCase() + appliance.slice(1)}</p>`;
			})
			.join(' ')}
			`;

		this.applianceContainer.innerHTML = applianceData;

		this.data.filter((recipe) => {
			recipe.ustensils.map((ustensil) => ustensilsList.push(ustensil));
		});

		normalizedUstensils = removeDuplicates(ustensilsList);

		const ustensilData = ` ${normalizedUstensils
			.map((ustensil) => {
				return `<p>${ustensil.charAt(0).toUpperCase() + ustensil.slice(1)}</p>`;
			})
			.join(' ')}
			`;

		this.ustensilsContainer.innerHTML = ustensilData;

		const addToList = (e) => {
			const tag = e.target.innerHTML;
			const tagEl = e.target;
			tagEl.style.display = 'none';
			this.combineSelected.push(tag);
			new SearchOnTag({ recipes: this.data, selectedTags: this.combineSelected }).displayOnTag();
			new DisplaySelectedTags({ recipes: this.data, selectedTags: this.combineSelected }).listingTags();
			new RemoveTag({ selectedTags: this.combineSelected }).tagsSelected();
		};

		for (let ingredient of this.ingredientContainer.children) {
			ingredient.addEventListener('click', addToList);
		}

		for (let appliance of this.applianceContainer.children) {
			appliance.addEventListener('click', addToList);
		}

		for (let ustensil of this.ustensilsContainer.children) {
			ustensil.addEventListener('click', addToList);
		}
	}

	populateTagsReaminder(data) {
		const remainingRecipes = data;
		console.log(remainingRecipes);
		//Ingredients
		let ingrediensList = [];
		let normalizedIngredients = [];
		//Appliance
		let applianceList = [];
		let normalizedAppliance = [];
		//Ustensils
		let ustensilsList = [];
		let normalizedUstensils = [];

		this.data.filter((recipe) => {
			recipe.ingredients.map((ingredient) => ingrediensList.push(ingredient.ingredient));
		});

		normalizedIngredients = removeDuplicates(ingrediensList);

		const ingredientsData = ` ${normalizedIngredients
			.map((appliance) => {
				return `<p>${appliance.charAt(0).toUpperCase() + appliance.slice(1)}</p>`;
			})
			.join(' ')}
				`;

		this.ingredientContainer.innerHTML = ingredientsData;

		this.data.filter((recipe) => applianceList.push(recipe.appliance));
		normalizedAppliance = removeDuplicates(applianceList);

		const applianceData = ` ${normalizedAppliance
			.map((appliance) => {
				return `<p>${appliance.charAt(0).toUpperCase() + appliance.slice(1)}</p>`;
			})
			.join(' ')}
				`;

		this.applianceContainer.innerHTML = applianceData;

		this.data.filter((recipe) => {
			recipe.ustensils.map((ustensil) => ustensilsList.push(ustensil));
		});

		normalizedUstensils = removeDuplicates(ustensilsList);

		const ustensilData = ` ${normalizedUstensils
			.map((ustensil) => {
				return `<p>${ustensil.charAt(0).toUpperCase() + ustensil.slice(1)}</p>`;
			})
			.join(' ')}
				`;

		this.ustensilsContainer.innerHTML = ustensilData;

		const addToList = (e) => {
			const tag = e.target.innerHTML;
			const tagEl = e.target;
			tagEl.style.display = 'none';
			this.combineSelected.push(tag);
			console.log(this.combineSelected);
			new SearchRemainder({ recipes: remainingRecipes, selectedTags: this.combineSelected }).displayOnTag();
			new DisplaySelectedTags({ recipes: remainingRecipes, selectedTags: this.combineSelected }).listingTags();
	
		};

		for (let ingredient of this.ingredientContainer.children) {
			ingredient.addEventListener('click', addToList);
		}

		for (let appliance of this.applianceContainer.children) {
			appliance.addEventListener('click', addToList);
		}

		for (let ustensil of this.ustensilsContainer.children) {
			ustensil.addEventListener('click', addToList);
		}
	}
}
