const joi = require('joi');

const reservePost = joi.object({
    id_user: joi.string(),
    data_start: joi.string(),
    data_end: joi.string(),
    id_car: joi.string(),
    id_rental: joi.string(),
    final_value: joi.number()
})

module.exports = async (req, res, next) => {
    const reqBody = req.body;
    try {

        await reservePost.validateAsync({ ...reqBody });
        next();

    } catch (error) {
        return res.status(400).json({
            error: error.message
        })
    }
}