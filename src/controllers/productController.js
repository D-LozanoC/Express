const productServices = require('../services/productServices')

const getAllProducts = (req, res, next) => {
    try {
        res.status(200).json(productServices.getAllProducts(req.params.userId))
    } catch (error) {
        next(error)
    }
}

const getProduct = (req, res, next) => {
    try {
        const product = productServices.getProduct(parseInt(req.params.idProduct))

        if (!product){
            const error = new Error('El id del producto no existe');
            error.status = 404;
            return next(error)
        }

        res.status(200).json(product);
    } catch (error) {
        next(error)
    }
}

const addProduct = (req, res, next) => {
    try {
        const { nombre, precio, stock } = req.body;
        const userId = req.params.userId;

        productServices.addProduct(userId, nombre, precio, stock);
        res.status(201).send('Producto creado!')

    } catch (error) {
        next(error)
    }
}

const updateProduct = (req, res, next) => {
    try {
        const { nombre, precio, stock } = req.body;
        
        productServices.updateProduct(parseInt(req.params.idProduct), nombre, precio, stock)
        res.status(201).send('Producto actualizado!')

    } catch (error) {
        next(error)
    }
}

const deleteProduct = (req, res, next) => {
    try {
        const product = productServices.getProduct(parseInt(req.params.idProduct));

        if (!product) {
            const error = new Error('Producto no encontrado.')
            error.status = 404
            return next(error)
        }

        productServices.deleteProduct(product);

        res.status(204).send('Se borro correctamente el producto')

    } catch (error) {
        next(error)
    }
}


module.exports = {
    getAllProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}