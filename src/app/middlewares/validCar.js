const joi = require('joi');
const moment = require('moment');
const descriptionInvalid = require('../utils/descriptionInvalid');
const passengerInvalid = require('../utils/passengersInvalid');
const carYearInvalid = require('../utils/carYearInvalid');

const carPost = joi.object({
    model: joi.string().required(),
    type: joi.string().required(),
    brand: joi.string().required(),
    year: joi.number().min(1950).max(2022).required().error(new carYearInvalid()),
    color: joi.string().required(),
    accessories: joi.array().min(1).unique().required().items(joi.object({
        description: joi.string().required()
    })).error(new descriptionInvalid()),
    passengersQtd: joi.number().min(3).required().error(new passengerInvalid())
})


module.exports = async (req, res, next) => {
    const reqBody = req.body;
    try {
        if (req.method == "POST") {
            await carPost.validateAsync({ ...reqBody });
            next();
        }
    } catch (error) {
        return res.status(400).json({
            error: error.message
        })
    }
}

