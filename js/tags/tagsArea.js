class TagsSection {
	constructor(data) {

		this.recipes = data
		//List Conatianers
		this.ingredientContainer = document.querySelector('.ingredients-list');
		this.applianceContainer = document.querySelector('.appliance-list');
		this.ustensilsContainer = document.querySelector('.ustensils-list');

		//List of selectedTags
		this.selectedTags = document.querySelector('.selected-tags');
	}

	populateTags(data) {
		let recipesData = data;
		//Ingredients
		let ingrediensList = [];
		let normalizedIngredients = [];
		//Appliance
		let applianceList = [];
		let normalizedAppliance = [];
		//Ustensils
		let ustensilsList = [];
		let normalizedUstensils = [];

		// Populating Tag containers with data bein properly formatted

		this.recipes.filter((recipe) => {
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

		this.recipes.filter((recipe) => applianceList.push(recipe.appliance));
		normalizedAppliance = removeDuplicates(applianceList);

		const applianceData = ` ${normalizedAppliance
			.map((appliance) => {
				return `<p>${appliance.charAt(0).toUpperCase() + appliance.slice(1)}</p>`;
			})
			.join(' ')}
			`;

		this.applianceContainer.innerHTML = applianceData;

		this.recipes.filter((recipe) => {
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

		// Adding tags to selected list which then will be transferred
		// to classes responsible for search and display functions

		let selectedList = [];

		const addToList = (e) => {
			const tag = e.target.innerHTML;
			const el = e.target
			el.style.display = "none"
			selectedList.push(tag);

			new SearchOnTag({ recipes: recipesData, selected: selectedList }).displayOnTag();
			new DisplaySelectedTags({ recipes: recipesData, selected: selectedList }).listingTags();
		};

		for (let tag of this.ingredientContainer.children) {
			tag.addEventListener('click', addToList);
		}

		for (let tag of this.applianceContainer.children) {
			tag.addEventListener('click', addToList);
		}

		for (let tag of this.ustensilsContainer.children) {
			tag.addEventListener('click', addToList);
		}
	}

	populateTagsReaminder(data) {
		// Recipes Data
		let remainderData = data;

		//Ingredients
		let ingrediensList = [];
		let normalizedIngredients = [];
		//Appliance
		let applianceList = [];
		let normalizedAppliance = [];
		//Ustensils
		let ustensilsList = [];
		let normalizedUstensils = [];

		// Populating Tag containers with data bein properly formatted

		remainderData.filter((recipe) => {
			recipe.ingredients.map((ingredient) => ingrediensList.push(ingredient.ingredient));
		});

		normalizedIngredients = removeDuplicates(ingrediensList);

		const ingredientsData = ` ${normalizedIngredients
			.map((ingredient) => {
				return `<p >${ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}</p>`;
			})
			.join(' ')}
				`;

		this.ingredientContainer.innerHTML = ingredientsData;

		remainderData.filter((recipe) => applianceList.push(recipe.appliance));
		normalizedAppliance = removeDuplicates(applianceList);

		const applianceData = ` ${normalizedAppliance
			.map((appliance) => {
				return `<p>${appliance.charAt(0).toUpperCase() + appliance.slice(1)}</p>`;
			})
			.join(' ')}
				`;

		this.applianceContainer.innerHTML = applianceData;

		remainderData.filter((recipe) => {
			recipe.ustensils.map((ustensil) => ustensilsList.push(ustensil));
		});

		normalizedUstensils = removeDuplicates(ustensilsList);

		const ustensilData = ` ${normalizedUstensils
			.map((ustensil) => {
				return `<p >${ustensil.charAt(0).toUpperCase() + ustensil.slice(1)}</p>`;
			})
			.join(' ')}
				`;

		this.ustensilsContainer.innerHTML = ustensilData;

		// Fromatting done

		// Adding tags to selected list which then will be transferred
		// to classes responsible for search and display functions

		let selectedList = [];

		const addToList = (e) => {
			const tag = e.target.innerHTML;
			const el = e.target
			el.style.display = "none"
			selectedList.push(tag);

			new SearchOnTag({ recipes: remainderData, selected: selectedList }).displayOnTag();
			new DisplayRemainder({ recipes: remainderData, selected: selectedList }).listingTags();
		};
		for (let tag of this.ingredientContainer.children) {
			tag.addEventListener('click', addToList);
		}

		for (let tag of this.applianceContainer.children) {
			tag.addEventListener('click', addToList);
		}

		for (let tag of this.ustensilsContainer.children) {
			tag.addEventListener('click', addToList);
		}
	}
}
