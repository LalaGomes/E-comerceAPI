import express from 'express';
import fs from 'fs';
import https from 'https';
import cors from "cors";

const app = express();

app.use(express.json());

// const  opitions = {
//     origin: ["*"]
// };


app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

// app.use(cors(opitions));

import routerUsuario from '../routers/UsuarioRouter.js';
import routerProdutos from '../routers/ProdutosRouter.js';
import routerCarrinho from '../routers/CarrinhoRouter.js';

app.use(routerUsuario);
app.use(routerProdutos);
app.use(routerCarrinho);


app.listen(3000);

https.createServer({
    cert: fs.readFileSync('src/SSL/code.crt'),
    key: fs.readFileSync('src/SSL/code.key')
},app).listen(3001, ()=> console.log("rodando em https"))