class notFound extends Error {
    constructor(field) {
        super();
        this.name = "Not found";
        this.status = 404;
        this.message = [
            {
                message: this.name,
                details: [{ message: `Your ${field} was not found` }]
            }];
    }
}

module.exports = notFound;