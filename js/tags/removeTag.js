class RemoveTag {
	constructor(data) {
		this.selectedTags = document.querySelector('.selected-tags');
		this.selectedList = data.selectedTags;
	}

	tagsSelected() {
		const removeTag = (e) => {
			const tag = e.target.textContent;

			for (let i = 0; i < this.selectedList.length; i++) {
				if (this.selectedList[i].trim() === tag.trim()) {
					this.selectedList.splice(i, 1);
					new DisplaySelectedTags();

				}
			}
		};

		for (let tag of this.selectedTags.children) {
			tag.addEventListener('click', removeTag);
		}
	}
}
