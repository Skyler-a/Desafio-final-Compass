const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: 'No token provided' });
    }

    const parts = authHeader.split(' ');

    if (!parts.length === 2) {
        return res.status(401).json({ error: 'Token error' });
    }

    const [scheme, token] = parts;
    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).json({ error: 'token malformated' });
    }

    jwt.verify(token, authConfig.secret, (error, decoded) => {
        if (error) {
            return res.status(401).json({ error: 'Invalid token' });
        }
        req.userId = decoded.id;
        return next();
    })

}
