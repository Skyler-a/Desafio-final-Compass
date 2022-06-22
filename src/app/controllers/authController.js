const authService = require('../service/authService');
class authController {
    async login(req, res) {
        try {
            const { email, password } = req.body;
            const result = await authService.login(email, password);
            res.setHeader('token', result.token),
                res.status(204).json(result.token)
        } catch (error) {
            return res.status(400).json(error);
        }
    }
} module.exports = new authController();