const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middlewares/errorMiddleware');

app.use(express.json());
app.use(errorHandler);

app.get('/', (req, res) => {
    res.status(200).send("API de gestión de usuarios");
});

app.use('/users', userRoutes);

module.exports = app;