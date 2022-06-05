class invalidEnum extends Error {
    constructor(field) {
        super();
        this.name = "Invalid enum";
        this.status = 400;
        this.message = [
            {
                message: this.name,
                details: [{ message: `Your enum ${field} must be yes or no` }]
            }];
    }
}

module.exports = invalidEnum;