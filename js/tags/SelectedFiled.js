class SelectedField {
	constructor(data) {
		this.tags = document.querySelector('.selected-tags');

		this.remainingData = data.remaining;
		this.selectedList = data.selected;
	}

	handleRemove() {
		const removeTag = (e) => {
			const tag = e.target.parentNode.parentNode.textContent;

			for (let i = 0; i < this.selectedList.length; i++) {
				if (this.selectedList[i] === tag.trim()) {
					this.selectedList.splice(i, 1);
					new SearchRemainder({remaining: this.remainingData, selected: this.selectedList}).displayOnTag()
					new DisplayRemainder({remaining: this.remainingData, selected: this.selectedList}).listingTags()
				
				}
	
			}

              

		};

		for (let elt of this.tags.children) {
			elt.children[0].addEventListener('click', removeTag);
		}
	}
}
