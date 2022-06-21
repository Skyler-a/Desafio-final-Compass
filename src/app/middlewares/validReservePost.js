const joi = require('joi');

const reservePost = joi.object({
    id_user: joi.string().required(),
    data_start: joi.string().required(),
    data_end: joi.string().required(),
    id_car: joi.string().required(),
    id_rental: joi.string().required(),
    final_value: joi.number()
})

module.exports = async (req, res, next) => {
    const reqBody = req.body;
    try {

        if (req.method == "POST") {
            await reservePost.validateAsync({ ...reqBody });
            next();
        }
    } catch (error) {
        return res.status(400).json({
            error: error.message
        })
    }
}