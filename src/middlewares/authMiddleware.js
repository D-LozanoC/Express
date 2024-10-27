require('dotenv').config();
const { getUserById } = require('../services/userServices')

const authSecureTokenMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token | token !== process.env.TOKEN) return res.status(400).send('El token no existe o no esta registrado');

    next();
}

const authUserId = (req, res, next) => {
    const userId = parseInt(req.params.userId);
    
    if (!getUserById(userId)) {
        const error = new Error('No existe el user id');
        error.status = 404;
        return next(error)
    }
    return next()
}

module.exports = {
    authSecureTokenMiddleware,
    authUserId
};