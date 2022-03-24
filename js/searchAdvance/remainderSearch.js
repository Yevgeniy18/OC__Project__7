class RemainderSearch {
	constructor(data) {
		this.data = data;
		console.log(this.data);
		this.ingredientContainer = document.querySelector('.ingredients-list');
		this.applianceContainer = document.querySelector('.appliance-list');
		this.ustensilsContainer = document.querySelector('.ustensils-list');

		//List of selectedTags
		this.selectedTags = document.querySelector('.selected-tags');

		// CombinedTag
		this.combineSelected = [];
	}

	addingTags() {
		const addTagToList = (e) => {
			const tag = e.target.innerHTML;
			const tagEl = e.target;
			tagEl.style.display = 'none';
			this.combineSelected.push(tag);
            console.log(this.combineSelected)
			new SearchOnTag({ recipes: this.data, selectedTags: this.combineSelected }).displayOnTag();
			new DisplaySelectedTags({ recipes: this.data, selectedTags: this.combineSelected }).listingTags();
			// new RemoveTag({ selectedTags: this.combineSelected }).tagsSelected();
		};

		for (let ingredient of this.ingredientContainer.children) {
			ingredient.addEventListener('click', addTagToList);
		}

		for (let appliance of this.applianceContainer.children) {
			appliance.addEventListener('click', addTagToList);
		}

		for (let ustensil of this.ustensilsContainer.children) {
			ustensil.addEventListener('click', addTagToList);
		}
	}
}
