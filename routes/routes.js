const express = require('express')
const indexControllers = require('../controllers/indexControllers')
const routes = express.Router()





routes.get('/listarCategoria',indexControllers.listarCategoria)
routes.post('/cadastrarCategoria',indexControllers.cadastrarCategoria)
routes.put('/atualizarCategoria/:id',indexControllers.atualizarCategoria)
routes.delete('/deletarCategoria/:id',indexControllers.deletarCategoria)

routes.get('/listarProduto',indexControllers.listarProdutos)
routes.post('/cadastrarProduto',indexControllers.cadastrarProduto)
routes.put('/atualizarProduto/:id',indexControllers.atualizarProduto)
routes.delete('/deletarProduto/:id',indexControllers.deletarProduto)

module.exports=routes