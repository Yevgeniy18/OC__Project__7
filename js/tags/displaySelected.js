class DisplaySelectedTags {
	constructor(data) {
		this.recipes = data.recipes;
		this.selectedTags = removeDuplicates(data.selectedTags);
		this.selectedArea = document.getElementById('selected-tags');
		this.filteredTags = data.removedElts
	}

	listingTags() {
		let ingredientsList = [];
		let appliance = [];
		let ustensilList = [];

		this.recipes.filter((recipe) => recipe.ingredients.map((elt) => ingredientsList.push(elt.ingredient)));
		this.recipes.filter((recipe) => recipe.ustensils.map((elt) => ustensilList.push(elt)));
		this.recipes.filter((recipe) => appliance.push(recipe.appliance));

		const listedTags = `${this.selectedTags
			.map((elt) => {
				return `  <li class=${ ustensilList.includes(elt)? "ustensilsTag"
				: appliance.includes(elt)? "applianceTag"
				: ingredientsList.includes(elt)? "ingredientTag": "noTag"
										
			}>${elt} <i class="fa-solid fa-xmark"></i></li>`;
			})
			.join(' ')}

        `;

		this.selectedArea.innerHTML = listedTags;
	}

	listingRemovedTags(data){
		console.log(data.removedElts)

	}

	
}
