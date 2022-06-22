const joi = require('joi');
const validateCNPJ = require('../utils/validateCnpj');

const rentalPost = joi.object({
    name: joi.string().required(),
    cnpj: joi.string().required(),
    activities: joi.string().required(),
    address: joi.object({
        cep: joi.string().required(),
        number: joi.string().required(),
        isFilial: joi.string().valid('true', 'false').required(),
    }).min(1).required()
})

module.exports = async (req, res, next) => {
    try {
        const reqBody = req.body;

        if (!validateCNPJ(reqBody.cnpj)) {
            return res.status(400).json({
                message: "Your cnpj is invalid"
            })
        }

        if (req.method == "POST") {
            await rentalPost.validateAsync({ ...reqBody });
            next();
        }

    } catch (error) {
        return res.status(400).json(error.message)
    }
}