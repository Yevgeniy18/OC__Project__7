class SelectTag {
	constructor(data) {
		this.recipes = data;
		// Tag Containers
		this.ingredientList = document.querySelector('.ingredient-list');
		this.applianceList = document.querySelector('.tools-list');
		this.ustensilsList = document.querySelector('.ustensils-list');

		// Ingredients
		this.ingredientItem = '';

		//Appliance

		this.applianceItem = '';

		//ustensils

		this.ustensilsItem = '';

		// Selected Tag List

		this.selectedTagsList = [];
	
		// Container with selected tags
		this.selectedTags = document.querySelector('.selected-tags');

		// Tags whee selected tags will be listed

		this.ingredientListContainer = document.querySelector('.ingredient-section');
		this.applianceListContainer = document.querySelector('.appliance-section');
		this.ustensilsListContainer = document.querySelector('.ustensils-section');

		this.tagList = [
			...this.ingredientList.children,
			...this.applianceList.children,
			...this.ustensilsList.children
		];
	}

	selectingTagsHandler() {
		const addTagToList = (e) => {
			this.clickedItem = e.target.innerHTML;
			this.selectedTagsList.push(this.clickedItem);

			const selectedContainer = `
			${this.selectedTagsList
				.map((tag) => {
					return `
					<div class="selected-tag">
					<div>${tag} <button onclick="RemoveTag('${tag}')"> <i class="fa-solid fa-xmark"></i> </button></div>

					</div>
					
					`;
				})
				.join('')}
			
			`;
			this.selectedTags.innerHTML = selectedContainer;

			new RemoveTags({ tags: this.selectedTagsList, clickedItem: this.clickedItem });
			// new SearchOnTag().displayOnTag({ data: this.recipes, clickedTag: this.clickedItem });
		};

		for (let item of this.tagList) {
			item.addEventListener('click', addTagToList);
		}
	}
}
