class BadRequest extends Error {
    constructor(field) {
        super();
        this.name = "Bad Request";
        this.status = 400;
        this.message = [
            {
                message: this.name,
                details: [{ message: `Mensagem de teste por hora kek` }]
            }];
    }
}

module.exports = BadRequest;