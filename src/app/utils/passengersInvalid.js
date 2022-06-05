class passengerInvalid extends Error {
    constructor() {
        super();
        this.name = "Desciption Invalid";
        this.status = 400;
        this.message = [
            {
                message: this.name,
                details: [{ message: `Your passengers number must contain at least 3 persons` }]
            }];
    }
}

module.exports = passengerInvalid;