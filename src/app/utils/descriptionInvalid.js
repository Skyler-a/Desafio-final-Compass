class descriptionInvalid extends Error {
	constructor() {
		super();
		this.name = "Desciption Invalid";
		this.status = 400;
		this.message = [
			{
				message: this.name,
				details: [{ message: `accessories must be at least one element` }]
			}];
	}
}

module.exports = descriptionInvalid;