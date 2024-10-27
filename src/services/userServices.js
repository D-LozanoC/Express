let users = [];

const getAllUsers = () => users;

const getUserById = (userId) => users.find(user => user.id === userId);

const createUser = ((name, email) => {
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    return newUser;
})

const deleteUser = (user) => users.splice(users.indexOf(user), 1);

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser
}