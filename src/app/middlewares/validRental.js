const joi = require('joi');

const rentalPost = joi.object({
    name: joi.string().required(),
    cnpj: joi.string().required(),
    activities: joi.string().required(),
    address: joi.array().min(1).unique().required().items(joi.object({
        cep: joi.string().required(),
        number: joi.string().required(),
        isFilial: joi.boolean().valid("true", "false").required(),
    }))
})

module.exports = async (req, res, next) => {
    try {
        const reqBody = req.body;
        if (req.method == "POST") {
            await rentalPost.validateAsync({ ...reqBody });
            next();
        }
    } catch (error) {
        return res.status(400).json(error.message)
    }
}