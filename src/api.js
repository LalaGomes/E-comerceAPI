import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

import cors from "cors";

const  opitions = {
    origin: ["*"]
};

app.use(cors(opitions));

import routerUsuario from '../routers/UsuarioRouter.js';
import routerProdutos from '../routers/ProdutosRouter.js';
import routerCarrinho from '../routers/CarrinhoRouter.js';

app.use(routerUsuario);
app.use(routerProdutos);
app.use(routerCarrinho);


app.listen(port);