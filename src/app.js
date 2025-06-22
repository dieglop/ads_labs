const express = require ('express');
require('dotenv').config();
const clienteRouter = require('./routers/clienteRouter');
const pratoRouter = require('./routers/pratoRouter');
const pedidoRouter = require('./routers/pedidoRouter');


const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/cliente", clienteRouter);
//app.use("/api/prato", pratoRouter);
//app.use("/api/pedido", pedidoRouter);


app.listen(PORT, () => {
    console.log(`Servidor na porta ${PORT}`);
});


module.exports = app;