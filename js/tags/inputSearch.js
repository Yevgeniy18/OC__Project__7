class TagInputSearch {
	constructor(data) {
		this.data = data.recipes;

		this.ingredientsList = [];
		this.applianceList = [];
		this.ustensilsList = [];

		this.data.filter((recipe) => recipe.ingredients.map((elt) => this.ingredientsList.push(elt.ingredient)));
		this.data.filter((recipe) => recipe.ustensils.map((ustensil) => this.ustensilsList.push(ustensil)));
		this.data.filter((recipe) => this.applianceList.push(recipe.appliance));

		// this.applianceList.push(this.data.appliance)

		//input fields
		this.inputForIngredients = document.querySelector('.input__field__ingredients');
		this.inputForAppliance = document.querySelector('.input__field__appliance');
		this.inputForUstensils = document.querySelector('.input__field__ustensils');

		// containers

		this.ingredientsContainer = document.querySelector('.ingredients-list');
		this.applianceContainer = document.querySelector('.appliance-list');	
		this.ustensilsContainer = document.querySelector('.ustensils-list');

		// Searched
		this.searchedIngredient = '';
		this.searchedAppliance = '';
		this.searchedUstensils = '';
	}

	// addingTagsForSearch(){

	// 	console.log("adding")
	// 	let selectedList = []

	// 	const addToList = (e) => {

	// 		const tag = e.target.innerHTML
	// 		selectedList.push(tag)
	// 		console.log(selectedList)

	// 	}





	// 	for (let tag of this.ingredientsContainer.children){
	// 		tag.addEventListener('click', addToList)
	// 	}

	// 	for (let tag of this.applianceContainer.children){
	// 		tag.addEventListener('click', addToList )
	// 	}
		
	// 	for (let tag of this.ustensilsContainer.children){
	// 		tag.addEventListener('click', addToList )
	// 	}
		





	// }

	searchOnInput() {
		const resultsIngredients = (e) => {
			this.searchedIngredient = e.target.value;

			let filteredIngredients = [];

			for (let i = 0; i < this.ingredientsList.length; i++) {
				if (this.ingredientsList[i].trim().toLowerCase().includes(this.searchedIngredient)) {
					filteredIngredients.push(this.ingredientsList[i]);
				}
			}

			let normalizedIngredients = removeDuplicates(filteredIngredients);

			const filteredData = `
            ${normalizedIngredients
				.map((elt) => {
					return `<p>${elt.charAt(0).toUpperCase() + elt.slice(1)}</p>`;
				})
				.join(' ')}
            `;

			this.ingredientsContainer.innerHTML = filteredData;

			if(normalizedIngredients){
				new TagsSection().populateTags()
			}
		};

		const resultsAppliance = (e) => {
			this.searchedAppliance = e.target.value;

			let filteredAppliance = [];

			for (let i = 0; i < this.applianceList.length; i++) {
				if (this.applianceList[i].trim().toLowerCase().includes(this.searchedAppliance)) {
					filteredAppliance.push(this.applianceList[i]);
				}
			}

			let normalizedAppliance = removeDuplicates(filteredAppliance);

			const filteredData = `
            ${normalizedAppliance
				.map((elt) => {
					return `<p>${elt.charAt(0).toUpperCase() + elt.slice(1)}</p>`;
				})
				.join(' ')}
            `;

			this.applianceContainer.innerHTML = filteredData;

			if(normalizedAppliance){
				this.addingTagsForSearch()
			}





		};




		const resultsUstensils = (e) => {};

		this.inputForIngredients.addEventListener('input', resultsIngredients);

		this.inputForAppliance.addEventListener('input', resultsAppliance);

		this.inputForUstensils.addEventListener('input', resultsUstensils);
	}


	
}
