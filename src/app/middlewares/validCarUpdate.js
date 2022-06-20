const joi = require('joi');
const moment = require('moment');
const descriptionInvalid = require('../utils/descriptionInvalid');
const passengerInvalid = require('../utils/passengersInvalid');
const carYearInvalid = require('../utils/carYearInvalid');

const carPut = joi.object({
    model: joi.string(),
    type: joi.string(),
    brand: joi.string(),
    year: joi.number().min(1950).max(2022).error(new carYearInvalid()),
    color: joi.string(),
    accessories: joi.array().min(1).unique().items(joi.object({
        description: joi.string()
    })).error(new descriptionInvalid()),
    passengersQtd: joi.number().min(3).error(new passengerInvalid())
})

module.exports = async (req, res, next) => {
    const reqBody = req.body;
    try {
        if (req.method == "PUT") {
            await carPut.validateAsync({ ...reqBody });
            next();
        }
    } catch (error) {
        return res.status(400).json({
            error: error.message
        })
    }
}