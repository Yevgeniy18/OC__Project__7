let selectedList = [];

function addTag(tag) {
	// Tag Sections

	selectedList.push(tag);

	const fetchApi = async () => {
		let recipesApi = new DishesApi('/data/plats.json');
		let recipeData = await recipesApi.get();

		new SearchOnTag({ selectedTags: selectedList, recipes: recipeData }).displayOnTag();
		new DisplaySelectedTags({ selectedTags: selectedList, recipes: recipeData }).listingTags();
	};

	fetchApi();
}

// function removeTag(tag) {
// 	for (let i = 0; i < selectedList.length; i++) {
// 		if (selectedList[i] === tag) {
// 			selectedList.splice(i, 1);
// 		}
// 	}

// 	const fetchApi = async () => {
// 		let recipesApi = new DishesApi('/data/plats.json');
// 		let recipeData = await recipesApi.get();

// 		new SearchOnTag({ selectedTags: selectedList, recipes: recipeData }).displayOnTag();
// 		new DisplaySelectedTags({ selectedTags: selectedList, recipes: recipeData }).listingTags();
// 	};

// 	fetchApi();
// }

// wORKING WITH THE ADVANCED SEARCH

// let selectedListAdvanced = [];

// function addTagAdvanced(test) {

// 	console.log(test)

// 	console.log("hi")

// 	// console.log(remainder)
// 	// Tag Sections

// 	selectedListAdvanced.push(tag);

// 	const fetchApi = async () => {
// 		let recipesApi = new DishesApi('/data/plats.json');
// 		let recipeData = await recipesApi.get();

// 		// new SearchRemainder().displayOnTag({ selectedTags: selectedList});
// 		// new DisplaySelectedTags({ selectedTags: selectedList, recipes: recipeData }).listingTags();
// 	};

// 	fetchApi();
// }
