const flattenEachObject = (array) => {

    let newArray = []
	for (let i = 0; i < array.length; i++) {
		let combinedArray = (array[i].combinedItems = []);

		combinedArray.push(array[i].name);
		combinedArray.push(array[i].description);
		array[i].ingredients.map((ingredient) => combinedArray.push(ingredient.ingredient));
        newArray.push(array[i])
	}

    return newArray
};
