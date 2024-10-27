const validateUser = (req, res, next) => {
    const { name, email } = req.body;

    if (!name || !email) {
        const error = new Error('El nombre y email son obligatorios');
        error.status = 404;
        return next(error)
    }

    if (typeof name !== "string" || typeof email !== "string") {
        const error = new Error('El nombre y email tienen que ser cadenas de texto');
        error.status = 404;
        return next(error)
    }

    const regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/gi;

    if (!regexEmail.test(email)) {
        const error = new Error('Digite correctamente el email');
        error.status = 404;
        return next(error)
    }

    next()
}

module.exports = validateUser;