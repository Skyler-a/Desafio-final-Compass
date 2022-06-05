const joi = require('joi');
const moment = require('moment');
const descriptionInvalid = require('../utils/descriptionInvalid');
const passengerInvalid = require('../utils/passengersInvalid');

const carSchema = joi.object({
    model: joi.string().required(),
    type: joi.string().required(),
    brand: joi.string().required(),
    year: joi.number().min(1950).max(2022).required(),
    color: joi.string().required(),
    accessories: joi.array().min(1).unique().items(joi.object({
        description: joi.string().required()
    })).error(new descriptionInvalid('accessories')),
    passengersQtd: joi.number().min(3).required().error(new passengerInvalid('passengersQtd'))
})
module.exports = async (req, res, next) => {
    const reqBody = req.body;
    try {
        if (req.method == "POST") {
            await carSchema.validateAsync({ ...reqBody });
            next();
        }
    } catch (error) {

    }
}

