class TagsSection {
	constructor(data) {
		this.recipes = data;
		//List Conatianers
		this.ingredientContainer = document.querySelector('.ingredients-list');
		this.applianceContainer = document.querySelector('.appliance-list');
		this.ustensilsContainer = document.querySelector('.ustensils-list');

		// Inputs
		this.inputForIngredients = document.querySelector('.input__field__ingredients');
		this.inputForAppliance = document.querySelector('.input__field__appliance');
		this.inputForUstensils = document.querySelector('.input__field__ustensils');

		//List of selectedTags
		this.selectedTags = document.querySelector('.selected-tags');
	}

	populateTags(data) {
		let recipesData = data;
		//Ingredients
		let ingredientsList = [];
		let normalizedIngredients = [];
		let searchedIngredient = '';

		//Appliance
		let applianceList = [];
		let normalizedAppliance = [];
		let searchedAppliance = '';
		//Ustensils
		let ustensilsList = [];
		let normalizedUstensils = [];
		let searchedUsstensils = '';

		let selectedList = [];

		const addToList = (e) => {
			const tag = e.target.innerHTML;
			const el = e.target;
			el.style.display = 'none';
			selectedList.push(tag);

			new SearchOnTag({ recipes: recipesData, selected: selectedList }).displayOnTag();
			new DisplaySelectedTags({ recipes: recipesData, selected: selectedList }).listingTags();
		};

		// Populating Tag containers with data bein properly formatted

		this.recipes.filter((recipe) => {
			recipe.ingredients.map((ingredient) =>
				ingredientsList.push(
					ingredient.ingredient.charAt(0).toUpperCase() + ingredient.ingredient.toLowerCase().slice(1)
				)
			);
		});

		normalizedIngredients = removeDuplicates(ingredientsList);
		const ingredientsData = ` ${normalizedIngredients
			.map((ingredient) => {
				return `<p>${ingredient}</p>`;
			})
			.join(' ')}
			`;

		this.ingredientContainer.innerHTML = ingredientsData;

		this.recipes.filter((recipe) =>
			applianceList.push(recipe.appliance.charAt(0).toUpperCase() + recipe.appliance.toLowerCase().slice(1))
		);

		normalizedAppliance = removeDuplicates(applianceList);

		const applianceData = ` ${normalizedAppliance
			.map((appliance) => {
				return `<p>${appliance && appliance.replace('.', '')}</p>`;
			})
			.join(' ')}
			`;

		this.applianceContainer.innerHTML = applianceData;

		this.recipes.filter((recipe) => {
			recipe.ustensils.map((ustensil) => ustensilsList.push(ustensil.replace('.', '')));
		});

		normalizedUstensils = removeDuplicates(ustensilsList);

		const ustensilData = ` ${normalizedUstensils
			.map((ustensil) => {
				return `<p>${ustensil.charAt(0).toUpperCase() + ustensil.toLowerCase().slice(1)}</p>`;
			})
			.join(' ')}
			`;

		this.ustensilsContainer.innerHTML = ustensilData;

		// Adding tags to selected list which then will be transferred
		// to classes responsible for search and display functions

		for (let tag of this.ingredientContainer.children) {
			tag.addEventListener('click', addToList);
		}

		for (let tag of this.applianceContainer.children) {
			tag.addEventListener('click', addToList);
		}

		for (let tag of this.ustensilsContainer.children) {
			tag.addEventListener('click', addToList);
		}

		// Filtered on input

		const ingredientsInput = (e) => {
			let filteredIngredients = [];

			searchedIngredient = e.target.value;

			for (let i = 0; i < normalizedIngredients.length; i++) {
				if (normalizedIngredients[i].trim().toLowerCase().includes(searchedIngredient.trim().toLowerCase())) {
					filteredIngredients.push(normalizedIngredients[i]);
				}
			}

			const filteredData = `
            ${filteredIngredients
				.map((elt) => {
					return `<p>${elt.charAt(0).toUpperCase() + elt.slice(1)}</p>`;
				})
				.join(' ')}
            `;

			this.ingredientContainer.innerHTML = filteredData;

			for (let tag of this.ingredientContainer.children) {
				tag.addEventListener('click', addToList);
			}
		};

		const applianceInput = (e) => {
			let filteredAppliance = [];
			searchedAppliance = e.target.value;

			for (let i = 0; i < normalizedAppliance.length; i++) {
				if (normalizedAppliance[i].trim().toLowerCase().includes(searchedAppliance.trim().toLowerCase())) {
					filteredAppliance.push(normalizedAppliance[i]);
				}
			}

			const filteredData = `
            ${filteredAppliance
				.map((elt) => {
					return `<p>${elt.charAt(0).toUpperCase() + elt.slice(1)}</p>`;
				})
				.join(' ')}
            `;

			this.applianceContainer.innerHTML = filteredData;

			for (let tag of this.applianceContainer.children) {
				tag.addEventListener('click', addToList);
			}
		};

		const ustensilsInput = (e) => {
			let filteredUstensils = [];
			searchedUsstensils = e.target.value;

			for (let i = 0; i < normalizedUstensils.length; i++) {
				if (normalizedUstensils[i].trim().toLowerCase().includes(searchedUsstensils.trim().toLowerCase())) {
					filteredUstensils.push(normalizedUstensils[i]);
				}
			}

			const filteredData = `
            ${filteredUstensils
				.map((elt) => {
					return `<p>${elt.charAt(0).toUpperCase() + elt.slice(1)}</p>`;
				})
				.join(' ')}
            `;

			this.ustensilsContainer.innerHTML = filteredData;

			for (let tag of this.ustensilsContainer.children) {
				tag.addEventListener('click', addToList);
			}
		};

		this.inputForIngredients.addEventListener('input', ingredientsInput);
		this.inputForAppliance.addEventListener('input', applianceInput);
		this.inputForUstensils.addEventListener('input', ustensilsInput);
	}

	populateTagsRemainder(data) {
		// Recipes Data
		let remainderData = data;

		//Ingredients
		let ingrediensList = [];
		let normalizedIngredients = [];
		let searchedIngredient = '';
		//Appliance
		let applianceList = [];
		let normalizedAppliance = [];
		let searchedAppliance = '';
		//Ustensils
		let ustensilsList = [];
		let normalizedUstensils = [];
		let searchedUsstensils = '';

		let selectedList = [];

		const addToList = (e) => {
			const tag = e.target.innerHTML;
			const el = e.target;
			el.style.display = 'none';
			selectedList.push(tag);

			new SearchOnTag({ recipes: remainderData, selected: selectedList }).displayOnTag();
			new DisplaySelectedTags({ recipes: remainderData, selected: selectedList }).listingTags();
		};

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
			recipe.ustensils.map((ustensil) => ustensilsList.push(ustensil.charAt(0).toLowerCase() + ustensil.toLowerCase().slice(1)));
		});

		normalizedUstensils = removeDuplicates(ustensilsList);

		const ustensilData = ` ${normalizedUstensils
			.map((ustensil) => {
				return `<p >${ustensil}</p>`;
			})
			.join(' ')}
				`;

		this.ustensilsContainer.innerHTML = ustensilData;

		// Fromatting done

		// Adding tags to selected list which then will be transferred
		// to classes responsible for search and display functions

		for (let tag of this.ingredientContainer.children) {
			tag.addEventListener('click', addToList);
		}

		for (let tag of this.applianceContainer.children) {
			tag.addEventListener('click', addToList);
		}

		for (let tag of this.ustensilsContainer.children) {
			tag.addEventListener('click', addToList);
		}

		// Filtered on input

		const ingredientsInput = (e) => {
			let filteredIngredients = [];

			searchedIngredient = e.target.value;

			for (let i = 0; i < normalizedIngredients.length; i++) {
				if (normalizedIngredients[i].trim().toLowerCase().includes(searchedIngredient.trim().toLowerCase())) {
					filteredIngredients.push(normalizedIngredients[i]);
				}
			}

			const filteredData = `
            ${filteredIngredients
				.map((elt) => {
					return `<p>${elt.charAt(0).toUpperCase() + elt.slice(1)}</p>`;
				})
				.join(' ')}
            `;

			this.ingredientContainer.innerHTML = filteredData;

			for (let tag of this.ingredientContainer.children) {
				tag.addEventListener('click', addToList);
			}
		};

		const applianceInput = (e) => {
			let filteredAppliance = [];
			searchedAppliance = e.target.value;

			for (let i = 0; i < normalizedAppliance.length; i++) {
				if (normalizedAppliance[i].trim().toLowerCase().includes(searchedAppliance.trim().toLowerCase())) {
					filteredAppliance.push(normalizedAppliance[i]);
				}
			}

			const filteredData = `
            ${filteredAppliance
				.map((elt) => {
					return `<p>${elt.charAt(0).toUpperCase() + elt.slice(1)}</p>`;
				})
				.join(' ')}
            `;

			this.applianceContainer.innerHTML = filteredData;

			for (let tag of this.applianceContainer.children) {
				tag.addEventListener('click', addToList);
			}
		};

		const ustensilsInput = (e) => {
			let filteredUstensils = [];
			searchedUsstensils = e.target.value;

			for (let i = 0; i < normalizedUstensils.length; i++) {
				if (normalizedUstensils[i].trim().toLowerCase().includes(searchedUsstensils.trim().toLowerCase())) {
					filteredUstensils.push(normalizedUstensils[i]);
				}
			}

			const filteredData = `
            ${filteredUstensils
				.map((elt) => {
					return `<p>${elt.charAt(0).toUpperCase() + elt.slice(1)}</p>`;
				})
				.join(' ')}
            `;

			this.ustensilsContainer.innerHTML = filteredData;

			for (let tag of this.ustensilsContainer.children) {
				tag.addEventListener('click', addToList);
			}
		};

		this.inputForIngredients.addEventListener('input', ingredientsInput);
		this.inputForAppliance.addEventListener('input', applianceInput);
		this.inputForUstensils.addEventListener('input', ustensilsInput);
	}
}