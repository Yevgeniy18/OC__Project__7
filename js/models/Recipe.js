class Recipe {
	constructor(data) {
		this.name = data.name;
		this.time = data.time;
		this.servings = data.servings;
		this.ingredients = data.ingredients;
		this.description = data.description;
		this.appliance = data.appliance;
		this.ustensils = data.ustensils;
	}

	getName() {
		return this.name;
	}

	getTime() {
		return this.time;
	}

	getServings() {
		return this.servings;
	}
	getIngredients() {
		return this.ingredients;
	}
	getDescription() {
		return this.description;
	}
	getAppliance() {
		return this.appliance;
	}
	getUstensils() {
		return this.ustensils;
	}
}
