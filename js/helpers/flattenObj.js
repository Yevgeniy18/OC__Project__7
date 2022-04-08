const flatten = (obj) => {
	const array = Array.isArray(obj) ? obj : [ obj ];
	return array.reduce((acc, value) => {
		acc.push(value.name);
		acc.push(value.description);
		value.ingredients.map((elt) => acc.push(elt.ingredient));

		return acc;
	}, []);
};
