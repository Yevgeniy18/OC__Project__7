class RemoveTags {
	constructor(data) {
		this.selectedTags = document.querySelector('.selected-tags')
		console.log(this.selectedTags)
		this.list = data

	}

	

	removeIngredient(){

		const removeTagFromList =(e) => {
			let selectedTag = e.target.textContent.trim()
			console.log(selectedTag)
	


			for (let i =0; i<this.list.length; i++){
				
				if(this.list.includes(selectedTag)){
					console.log("true")
					
				} else {
					console.log("false")
				}
			}
		

		}

		for(let tag of this.selectedTags.children){
			tag.addEventListener('click', removeTagFromList)
	
			
		}

	}
}
