const personSchema = require('../schema/personSchema');

class authRepository {
    async login(email, password) {
        return personSchema.findOne({ email }).select('+password');
    }

} module.exports = new authRepository();