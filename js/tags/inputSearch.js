class TagInputSearch {
	constructor(data) {
		this.ingredientsList = data.ingredients;
		this.applianceList = data.appliance;
		this.ustensilsList = data.ustensils;

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

	searchOnInput() {
		const resultsIngredients = (e) => {
			this.searchedIngredient = e.target.value;

			let filteredArray = [];

			for (let i = 0; i < this.ingredientsList.length; i++) {
				if (this.ingredientsList[i].trim().toLowerCase().includes(this.searchedIngredient)) {
					filteredArray.push(this.ingredientsList[i]);
				}
			}

			const filteredData = `
            ${filteredArray
				.map((elt) => {
					return `<p>${elt.charAt(0).toUpperCase() + elt.slice(1)}</p>`;
				})
				.join(' ')}


            
            
            `;

			this.ingredientsContainer.innerHTML = filteredData;
		};

		const applianceResults = (e) => {
			this.searchedAppliance = e.target.value;

			let filteredArray = [];

			for (let i = 0; i < this.applianceList.length; i++) {
				if (this.applianceList[i].trim().toLowerCase().includes(this.searchedAppliance)) {
					filteredArray.push(this.applianceList[i]);
				}
			}

			const filteredData = `
            ${filteredArray
				.map((elt) => {
					return `<p>${elt.charAt(0).toUpperCase() + elt.slice(1)}</p>`;
				})
				.join(' ')}


            
            
            `;

			this.applianceContainer.innerHTML = filteredData;
		};

		const ustensilsResults = (e) => {
			this.searchedUstensils = e.target.value;

			let filteredArray = [];

			for (let i = 0; i < this.ustensilsList.length; i++) {
				if (this.ustensilsList[i].trim().toLowerCase().includes(this.searchedUstensils)) {
					filteredArray.push(this.ustensilsList[i]);
				}
			}

			const filteredData = `
            ${filteredArray
				.map((elt) => {
					return `<p>${elt.charAt(0).toUpperCase() + elt.slice(1)}</p>`;
				})
				.join(' ')}


            
            
            `;

			this.ustensilsContainer.innerHTML = filteredData;
		};

		this.inputForIngredients.addEventListener('input', resultsIngredients);

		this.inputForAppliance.addEventListener('input', applianceResults);

		this.inputForUstensils.addEventListener('input', ustensilsResults);
	}
}
