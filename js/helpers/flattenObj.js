const flatten = (obj) => {
	const array = Array.isArray(obj) ? obj : [ obj ];
	return array.reduce((acc, value) => {
		acc.push(value.name);
		acc.push(value.description)
		// acc.concat(...value.ingredients.map(elt => elt.ingredient))
		acc.concat(value.ingredients.map(el => el.ingredient))
	
		return  acc;
	}, []);
};
