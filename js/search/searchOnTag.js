class SearchOnTag {
	constructor(data) {
		this.recipesWrapper = document.querySelector('.recipe-wrapper');
		this.recipesData = data.recipes;
		this.selectedTag = data.selected;
	}



	

	displayOnTag() {
		this.recipesWrapper.innerHTML = '';
		let result1= this.recipesData.filter(recipe => recipe.ingredients.find(elt => elt.ingredient.toLowerCase().includes(this.selectedTag.trim().toLowerCase())))

		let newArray = []

		this.recipesData.forEach(recipe => {
			if (recipe.ingredients.find(elt => elt.ingredient.toLowerCase().includes(this.selectedTag.trim().toLowerCase()))){
				newArray.push(recipe)
			}
		})


	

	

		console.log(newArray)
	}
}
