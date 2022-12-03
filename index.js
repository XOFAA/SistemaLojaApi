const express = require('express');
const routes = require('./routes/routes');
const app = express()
const porta = 3000;
const cors = require('cors');
const middlewareValidaJwt = require('./validarJwt');
const AuthController = require('./controllers/AuthController');


// ...
app.use(cors())



app.use(express.json())


//app.post('/login',AuthController.login)
app.use('/',routes)
app.listen(porta,()=>{
    console.log('Servidor Iniciado com sucesso')
})