class RecipeCard {
	constructor(recipe) {
		this.name = recipe.name;
		this.time = recipe.time;
		this.servings = recipe.servings;
		this.ingredients = recipe.ingredients;
		this.description = recipe.description;
		this.appliance = recipe.appliance;
		this.ustensils = recipe.ustensils;
	}

	createRecipeCard() {
		this.ingredients.forEach((item) =>
			Object.keys(item).forEach((key) => {
				if (item[key] === null || item[key] === undefined) {
					delete item[key];
				}
			})
		);

		const recipeWrapper = document.createElement('article');
		recipeWrapper.classList.add('recipe-card-wrapper');

		const recipeCard = `
        <div class="first-container"></div>
		<div class="second-container">
		<h3>${this.name}</h3>
		<div class="timer"> <i class="far fa-clock"></i>${this.time} min</div>
		</div>
		<div class="third-container">
		<div class="ingridients-container">

		${this.ingredients
			.map((elt) => {
			 	return elt.ingredient && elt.quantity && elt.unit ?  `
				<div class="inline-ingredients">
				<p class="first"> ${ elt.ingredient }:</p> 
				</br>
				<p>${elt.quantity} </p>
				<p>${elt.unit.slice(0,2)}</p> 
				</div>` : null
			})
			.join('')}
		</div>
		<div class="description"><p>${this.description}</p></div>
		</div>
        `;
		recipeWrapper.innerHTML = recipeCard;
		return recipeWrapper;
	}
}
