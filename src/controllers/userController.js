const userService = require('../services/userServices')

const getAllUsers = (req, res, next) => {
    try {
        res.status(200).json(userService.getAllUsers())
    } catch (error) {
        next(error)
    }
}

const getUserById = (req, res, next) => {
    try {
        const user = userService.getUserById(parseInt(req.params.userId));

        if (!user) {
            const error = new Error('Usuario no encontrado')
            error.status = 404
            return next(error)
        }

        res.status(200).json(user);
    } catch (error) {
        next(error)
    }


}

const createUser = (req, res, next) => {
    try {
        const { name, email } = req.body;
        userService.createUser(name, email)
        res.status(201).send('¡Usuario creado!')
    } catch (error) {
        next(error)
    }

};

const deleteUser = (req, res, next) => {
    try {
        const user = userService.getUserById(parseInt(req.params.userId));

        if (!user) {
            const error = new Error('Usuario no encontrado')
            error.status = 404
            return next(error)
        }

        userService.deleteUser(user);

        res.status(204).send('Se borro correctamente el usuario')

    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser
};