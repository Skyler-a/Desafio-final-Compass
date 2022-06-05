class descriptionInvalid extends Error {
	constructor() {
		super();
		this.name = "Accessories Invalid";
		this.status = 400;
		this.message = [
			{
				message: this.name,
				details: [{ message: `Your acessories field is invalid` }]
			}];
	}
}

module.exports = descriptionInvalid;