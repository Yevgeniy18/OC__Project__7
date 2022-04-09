class Api {
	constructor(url) {
		this._url = url;
	}

	async get() {
		return fetch(this._url)
			.then((response) => response.json())
			.then((response) => response.recipes)
			.catch((error) => console.log('cant fetch data', error));
	}
}

class RecipesApi extends Api {
	/****
     * @param{string} url
     */
	constructor(url) {
		super(url);
	}

	async getRecipes() {
		return await this.get();
	}
}
