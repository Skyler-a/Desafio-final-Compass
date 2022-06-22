class invalidDrive extends Error {
    constructor(field) {
        super();
        this.name = "Invalid Drive value";
        this.status = 400;
        this.message = [
            {
                message: this.name,
                details: [{ message: `You can not Drive` }]
            }];
    }
}

module.exports = invalidDrive;