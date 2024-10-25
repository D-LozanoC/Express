let users = [];

const getAllUsers = (req, res) => {
    res.status(200).json(users)
}

const getUserById = (req, res) => {
    const userId = parseInt(req.params.id);

    if (userId > users.length) return res.status(404).send('Id incorrecto');

    const user = users.find(user => user.id === userId);

    if (!user) return res.status(404).send('Usuario no encontrado.');

    res.status(200).json(user);
}

const createUser = (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) return res.status(400).send('Falta ingresar datos.');

    const newUser = {
        id: users.length + 1,
        name,
        email
    }

    users.push(newUser);
    res.status(201).send('¡Usuario creado!')
};

const deleteUser = (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.id));

    if (!user || user > users.length) return res.status(404).send('Id incorrecto');

    users.splice(users.indexOf(user),1)
    res.status(204).send('Se borro correctamente el usuario');
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser
};