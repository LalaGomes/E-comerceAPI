import { Router } from "express";

import { createTable, insertUsuario, updateUsuario, selectUsuarios, selectUsuario, deleteUsuario, loginUsuario } from '../src/controller/Usuario.js';

const routerUsuario = Router();

routerUsuario.get('/', function (req, res) {
    res.send('Hello User')
});

routerUsuario.get('/usuarios', selectUsuarios);

routerUsuario.get('/usuario', selectUsuario);

routerUsuario.post('/usuario', insertUsuario);

routerUsuario.put('/usuario', updateUsuario);

routerUsuario.delete('/usuario', deleteUsuario);

routerUsuario.get('/login', loginUsuario);

createTable();

export default routerUsuario;