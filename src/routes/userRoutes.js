const express = require('express');
const router = express.Router();
const productRoutes = require('./productRoutes')
const userController = require('../controllers/userController')
const {authSecureTokenMiddleware, authUserId} = require('../middlewares/authMiddleware');
const validateUser = require('../middlewares/validateUserMiddleware');

router.get('/', authSecureTokenMiddleware, userController.getAllUsers);

router.get('/:userId', authSecureTokenMiddleware, userController.getUserById);

router.post('/', authSecureTokenMiddleware, validateUser, userController.createUser);

router.delete('/:userId', authSecureTokenMiddleware, userController.deleteUser)

router.use('/:userId/products', authSecureTokenMiddleware, authUserId, productRoutes)

module.exports = router;