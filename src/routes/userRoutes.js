const express = require('express');
const router = express.Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middlewares/authMiddleware');
const validateUser = require('../middlewares/validateUserMiddleware');

router.get('/', authMiddleware, userController.getAllUsers);

router.get('/:id', authMiddleware, userController.getUserById);

router.post('/', authMiddleware, validateUser, userController.createUser);

router.delete('/:id', authMiddleware, userController.deleteUser)

module.exports = router;