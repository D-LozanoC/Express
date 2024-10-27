const validateProduct = (req, res, next) => {
    const { nombre, precio, stock } = req.body;

    if (!nombre || !precio || !stock) {
        const error = new Error('Todos los campos son obligatorios.');
        error.status = 404;
        return next(error)
    }

    if (typeof nombre !== "string" || typeof precio !== "string" || typeof stock !== "string") {
        const error = new Error('Todos los campos deben ser cadenas de texto.');
        error.status = 404;
        return next(error)
    }

    next()
}

module.exports = validateProduct;