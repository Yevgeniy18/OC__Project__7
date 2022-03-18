class DisplayTags {
	constructor(data) {
		this.selectedList = data;
		this.selectedTagsArea = document.querySelector('.selected-tags');
	}

	listItems() {
		let displayedData = `${this.selectedList
			.map((tag) => {
				return `<div class="ingredient-tag">
                <p>${tag}</p> <i class="fa-solid fa-xmark"></i>
                </div>`;
			})
			.join(' ')}`;

		this.selectedTagsArea.innerHTML = displayedData;
	}
}
