const authRepository = require('../repository/authRepository');
const bcript = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");
const formataCpf = require('../utils/cpfFomate');

class authService {
    async login(email, password) {
        const result = await authRepository.login(email, password);
        if (!result) {
            throw new Error("user not found");
        }
        if (!await bcript.compare(password, result.password)) {
            throw new Error("password incorrect");
        }
        result.password = undefined;
        const token = jwt.sign({ id: result.id }, authConfig.secret, {
            expiresIn: 86400,
        })
        formataCpf(result);
        return { result, token }
    }
} module.exports = new authService();