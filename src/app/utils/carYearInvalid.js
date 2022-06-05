class carYearInvalid extends Error {
    constructor() {
        super();
        this.name = "Year invalid";
        this.status = 400;
        this.message = [
            {
                message: this.name,
                details: [{ message: `Year of the car must be at least 1950 and at most 2022` }]
            }];
    }
}

module.exports = carYearInvalid;