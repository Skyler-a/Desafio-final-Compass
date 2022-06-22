class invalidData extends Error {
    constructor(field) {
        super();
        this.name = "Invalid Data";
        this.status = 400;
        this.message = [
            {
                message: this.name,
                details: [{ message: `Your data start or data end is invalid` }]
            }];
    }
}

module.exports = invalidData;