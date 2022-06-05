const joi = require("joi");
const moment = require("moment");
const validateCpf = require("../utils/validateCpf");

const personPost = joi.object({
    name: joi.string().min(4).required(),
    cpf: joi.string().required(),
    birthDay: joi.date().required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    canDrive: joi.string().valid("yes", "no")
})

module.exports = async (req, res, next) => {
    try {
        const reqBody = req.body;
        const birthDay = moment(reqBody.birthDay, 'DD/MM/YYYY').format('YYYY-MM-DD')
        const birthDayIsValid = moment().diff(birthDay, 'years', false) >= 18
        email = reqBody.email;
        const emailIsValid = /^[a-z0-9.]+@[a-z0-9]+\.[com]+(\.[a-z]+)?$/i.test(email)

        if (birthDayIsValid == false) {
            return res.status(400).json({
                message: "Your age must be at least 18 years old"
            })
        }
        if (!validateCpf(reqBody.cpf)) {
            return res.status(400).json({
                message: "Your cpf is invalid"
            })
        }
        if (!emailIsValid) {
            return res.status(400).json({
                message: "Your email is invalid"
            })
        }
        if (req.method == "POST") {
            await personPost.validateAsync({ ...reqBody, birthDay, email });
            next();
        }
    } catch (error) {
        return res.status(400).json({
            error: error.message
        })
    }
}