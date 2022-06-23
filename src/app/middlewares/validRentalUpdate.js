const joi = require('joi');
const validateCNPJ = require('../utils/validateCnpj');

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
        const cnpj = validateCNPJ(reqBody.cnpj)
        if (!cnpj) {
            return res.status(400).json({
                message: "Your cnpj is invalid"
            })
        }


        await rentalUpdate.validateAsync({ ...reqBody });
        next();


    } catch (error) {
        return res.status(400).json(error.message)
    }
}