import express from 'express';

const app = express();

app.use(express.json());

import routerUsuario from '../routers/UsuarioRouter.js';
import routerProdutos from '../routers/ProdutosRouter.js';
import routerCarrinho from '../routers/CarrinhoRouter.js';

app.use(routerUsuario);
app.use(routerProdutos);
app.use(routerCarrinho);


app.listen(3000);