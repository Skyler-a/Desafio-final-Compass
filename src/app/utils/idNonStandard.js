class idNonStandard extends Error {
    constructor() {
        super();
        this.name = "Out standard id";
        this.status = 400;
        this.message = [
            {
                message: this.name,
                details: [{ message: `Your ID was out-standard` }]
            }];
    }
}

module.exports = idNonStandard;