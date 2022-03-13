class Ingredients {
	constructor(data) {
		this.recipes = data;
		this.ingredientList = document.querySelector('.ingredients-list');
		this.selectedTags = document.querySelector('.selected-tags');
	}

	populateIngredients() {
		let ingredientList = [];
		let selectedTags = [];
		// List with normalizd values
		let normalizedList = [];

		// filtering ingredients

		this.recipes.filter((recipe) =>
			recipe.ingredients.map((ingredient) => ingredientList.push(ingredient.ingredient))
		);

		ingredientList.forEach((ingredient) => {
			if (!normalizedList.includes(ingredient)) {
				normalizedList.push(ingredient);
			}
		});

		const ingredientsData = `

        ${normalizedList
			.map((ingredient) => {
				return `<p>${ingredient} </p>`;
			})
			.join(' ')}
        
        
        `;

		this.ingredientList.innerHTML = ingredientsData;

		// Selecting and adding tag to the the selected area

		const addTagToList = (e) => {
			let selectedTag = e.target.innerHTML;
			selectedTags.push(selectedTag);
			// Adding tags to DOM

			const listSelectedTags = `
        
        ${selectedTags
			.map((tag) => {
				return `<div class="ingredients-tag"> 
                ${tag}
                </div>`;
			})
			.join(" ")}`;

			this.selectedTags.innerHTML = listSelectedTags;
			new RemoveTags(selectedTags).removeIngredient()
			new SearchOnTag({recipes:this.recipes, selected: selectedTag}).displayOnTag()
		
			
	
	
		};

		for (let ingredient of this.ingredientList.children) {
			ingredient.addEventListener('click', addTagToList);
		}



		
	
	
	}
}
