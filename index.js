const express = require('express');
const routes = require('./routes/routes');
const app = express()
const porta = 3000;
const cors = require('cors')
// ...
app.use(cors())



app.use(express.json())



app.use('/',routes)
app.listen(porta,()=>{
    console.log('Servidor Iniciado com sucesso')
})