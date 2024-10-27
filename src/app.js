const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middlewares/errorMiddleware');
require('dotenv').config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(errorHandler);

app.get('/', (req, res) => {
    res.status(200).send("API de gestión de usuarios");
});

app.use('/users', userRoutes);

app.listen(PORT, (req, res) => {
    console.log(`Server is running on http://localhost:${PORT}`);
});