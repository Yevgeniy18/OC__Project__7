const flatten = (obj) => {
	const array = Array.isArray(obj) ? obj : [ obj ];
	return array.reduce((acc, value) => {
		acc.push(value);
		if (value.ingredients) {
			acc = acc.concat(flatten(value.ingredients));
			delete value.ingredients;
        
		}
		return acc;
	}, []);
};
