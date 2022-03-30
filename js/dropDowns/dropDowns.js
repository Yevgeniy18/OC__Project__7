class ExpandingContainers {
	constructor(data) {
		this.recipes = data;

		// Arrows
		this.ingredientArrow = document.getElementById('ingredient-arrow');
		this.applianceArrow = document.getElementById('appliance-arrow');
		this.ustensilsArrow = document.getElementById('ustensils-arrow');

		// Containers
		this.ingredientContainer = document.querySelector('.ingredients-list');
		this.applianceContainer = document.querySelector('.appliance-list');
		this.ustensilsContainer = document.querySelector('.ustensils-list');

		/****Triggers***/
		this.ingredientTrigger = document.querySelector('.ingredients-trigger');
		this.toolsTrigger = document.querySelector('.appliance-trigger');
		this.ustensilsTrigger = document.querySelector('.ustensils-trigger');

		/***Wrappers**/
		this.ingredients = document.querySelector('.ingredients-wrapper');
		this.tools = document.querySelector('.appliance-wrapper');
		this.ustensils = document.querySelector('.ustensils-wrapper');

		/***Span Tag Names****/

		this.tagIngredients = document.querySelector('.tag__name__ingredients');
		this.tagTools = document.querySelector('.tag__name__appliance');
		this.tagUstensils = document.querySelector('.tag__name__ustensils');

		/****Input Fields****/
		this.inputFieldIngredients = document.querySelector('.input__field__ingredients');
		this.inputFieldTools = document.querySelector('.input__field__appliance');
		this.inputFieldIUstensils = document.querySelector('.input__field__ustensils');
	}

	handleTagDropDowns() {
		const handleIngredients = () => {
			this.ingredientTrigger.classList.toggle('open');
			this.ingredients.classList.toggle('open-ingredients');
			this.tagIngredients.classList.toggle('open');
			this.inputFieldIngredients.classList.toggle('open');
			this.ingredientContainer.classList.toggle('open');
		};

		this.ingredientArrow.addEventListener('click', handleIngredients);

		const handleAppliances = () => {
			this.toolsTrigger.classList.toggle('open');
			this.tools.classList.toggle('open-appliance');
			this.tagTools.classList.toggle('open');
			this.inputFieldTools.classList.toggle('open');
			this.applianceContainer.classList.toggle('open');
		};

		this.applianceArrow.addEventListener('click', handleAppliances);

		const handleUstensils = () => {
			this.ustensils.classList.toggle('open-ustensils');
			this.ustensilsTrigger.classList.toggle('open');
			this.tagUstensils.classList.toggle('open');
			this.inputFieldIUstensils.classList.toggle('open');
			this.ustensilsContainer.classList.toggle('open');
		};

		this.ustensilsArrow.addEventListener('click', handleUstensils);
	}
}