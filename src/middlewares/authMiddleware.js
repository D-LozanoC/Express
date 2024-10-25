require('dotenv').config();

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token | token !== process.env.TOKEN) return res.status(400).send('El token no existe o no esta registrado');

    next();
}

module.exports = authMiddleware;