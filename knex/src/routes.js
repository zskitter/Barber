const express = require('express');
const connection = require('./database/connection');
const routes = express.Router();

const UsuarioController = require('./database/controllers/UsuarioController');

//GET -> REQUISIÇÃO
//POST -> INSERÇÃO
//PUT -> ATUALIZAR
//DELETE -> DELETAR

routes.post('/usuarios/create', UsuarioController.create)
routes.put('/usuarios', UsuarioController.alter);
routes.delete('/usuarios', UsuarioController.deleteUser);
routes.post('/usuarios/val', UsuarioController.validation);


module.exports = routes;
