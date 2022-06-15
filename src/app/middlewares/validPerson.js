const joi = require("joi");
const moment = require("moment");
const validateCpf = require("../utils/validateCpf");
const invalidField = require("../utils/invalidField");
const invalidEnum = require("../utils/invalidEnum");

const personPost = joi.object({
    name: joi.string().min(4).required().error(new invalidField("name")),
    cpf: joi.string().required().error(new invalidField("cpf")),
    birthDay: joi.string().required().error(new invalidField("birthDay")),
    email: joi.string().email().required().error(new invalidField("email")),
    password: joi.string().min(6).required().error(new invalidField("password")),
    canDrive: joi.string().valid("yes", "no").required().error(new invalidEnum("canDrive"))
})

const personPut = joi.object({
    name: joi.string().min(4).error(new invalidField("name")),
    cpf: joi.string().error(new invalidField("cpf")),
    birthDay: joi.string().error(new invalidField("birthDay")),
    email: joi.string().email().error(new invalidField("email")),
    password: joi.string().min(6).error(new invalidField("password")),
    canDrive: joi.string().valid("yes", "no").error(new invalidEnum("canDrive"))
})


module.exports = async (req, res, next) => {
    try {
        const reqBody = req.body;
        const birthDay = moment(reqBody.birthDay, 'DD/MM/YYYY').format('YYYY-MM-DD')
        const birthDayIsInvalid = moment().diff(birthDay, 'years', false) < 18

        if (birthDayIsInvalid) {
            return res.status(400).json({
                message: "Your age must be at least 18 years old"
            })
        }

        if (!validateCpf(reqBody.cpf)) {
            return res.status(400).json({
                message: "Your cpf is invalid"
            })
        }

        if (req.method == "POST") {
            await personPost.validateAsync({ ...reqBody, birthDay });
            next();
        }
        if (req.method == "PUT") {
            await personPut.validateAsync({ ...reqBody, birthDay });
            next();
        }
    } catch (error) {
        return res.status(400).json(error.message)
    }
}