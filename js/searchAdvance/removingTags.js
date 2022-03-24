class RemovingTags {
	constructor(data) {
		this.selectedList = data;
		this.selectedTagsList = document.querySelector('.selected-tags');
	}

	removingAction(tagList) {
		tagList = this.selectedList;

		const rmeoveFromTagList = (e) => {
			const tag = e.target.innerHTML;

			for (let i = 0; i < tagList.length; i++) {
				if (tagList[i] === tag) {
					tagList.splice(i, 1);
				}
			}

			new DisplayTags(tagList);
		};

		for (let elt of this.selectedTagsList.children) {
			elt.addEventListener('click', rmeoveFromTagList);
		}
	}
}
