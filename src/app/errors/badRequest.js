class BadRequest extends Error {
    constructor(message) {
        super();
        this.name = "BadRequest";
        this.status = 400;
        this.message = [
            {
                message: this.name,
                details: [{ message: `${message}` }]
            }];
    }
}

module.exports = BadRequest;