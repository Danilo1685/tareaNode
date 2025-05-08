const express = require('express');

const app = express();

const port = 3000

app.use(express.json());


//Products
const productsRouter = require('./routes/products.routes');
app.use('/productos', productsRouter);


//Users
const usersRouter = require('./routes/users.routes');
app.use('/users', usersRouter);


//Puerto
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
})

