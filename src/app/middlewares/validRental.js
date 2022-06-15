const joi = require('joi');
const validateCNPJ = require('../utils/validateCNPJ');

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

const rentalUpdate = joi.object({
    name: joi.string(),
    cnpj: joi.string(),
    activities: joi.string(),
    address: joi.object({
        cep: joi.string(),
        number: joi.string(),
        isFilial: joi.string().valid('true', 'false')
    }).min(1)
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

        if (req.method == "PUT") {
            await rentalUpdate.validateAsync({ ...reqBody });
            next();
        }

    } catch (error) {
        return res.status(400).json(error.message)
    }
}