import {Router} from 'express';

import { createProduto, deleteProduto, insertProduto, selectProduto, selectProdutos, updateProduto} from '../src/controller/Produto.js';

const routerProdutos = Router();

routerProdutos.get('/produtos', selectProdutos);

routerProdutos.get('/produto', selectProduto)

routerProdutos.post('/produto', insertProduto);

routerProdutos.put('/produto', updateProduto);

routerProdutos.delete('/produto', deleteProduto);

createProduto();

export default routerProdutos;