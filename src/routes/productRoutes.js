const express = require('express');
const router = express.Router({ mergeParams: true });
const productController = require('../controllers/productController');
const { authSecureTokenMiddleware } = require('../middlewares/authMiddleware');
const validateProduct = require('../middlewares/validateProductMiddleware')

router.get('/', authSecureTokenMiddleware, productController.getAllProducts);

router.get('/:idProduct', authSecureTokenMiddleware, productController.getProduct);

router.post('/', authSecureTokenMiddleware, validateProduct, productController.addProduct);

router.put("/:idProduct", authSecureTokenMiddleware, validateProduct, productController.updateProduct);

router.delete('/:idProduct', authSecureTokenMiddleware, productController.deleteProduct);

module.exports = router;