class invalidField extends Error {
    constructor(field) {
        super();
        this.name = "Invalid Field";
        this.status = 400;
        this.message = [
            {
                message: this.name,
                details: [{ message: `The field: ${field} must comply with the defined validations` }]
            }];
    }
}

module.exports = invalidField;