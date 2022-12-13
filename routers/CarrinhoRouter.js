import { Router } from 'express';

import { createCarrinho, insertCarrinho, selectCarrinhos, selectCarrinho, updateCarrinho, deleteCarrinho } from '../src/controller/Carrinho.js';

const routerCarrinho = Router();

//buscar todos os usuarios:
routerCarrinho.get('/carrinhos', selectCarrinhos);
//buscar um usuario por id:
routerCarrinho.get('/carrinho', selectCarrinho);
//adicionar:
routerCarrinho.post('/carrinho', insertCarrinho);
//alterar pelo id:
routerCarrinho.put('/carrinho', updateCarrinho);
//deletar um usuario pelo id (cheque na rota de ver todos os usuarios):
routerCarrinho.delete('/carrinho', deleteCarrinho);

// app.get('/carrinhos', async function (req, res) {
//     let carrinhos = await selectCarrinhos();
//        res.json(carrinhos)
// });

// app.get('/carrinho', async function (req, res) {
//     let carrinho = await selectCarrinho(req.body.id);
//        res.json(carrinho)
//    });

// app.post('/carrinho', function (req, res) {
//     insertCarrinho(req.body)
//     res.json({
//         "statucCode": 200
//     })
// });

// app.put('/carrinho', function (req, res) {
//     if (req.body && !req.body.id) {
//         res.json({
//             "statusCode": "400",
//             "msg": "Você precisa informar um id"
//         })
//     } else {
//         updateCarrinho(req.body)
//         res.json({
//             "statucCode": 200
//         })
//     }

// });

// app.delete('/carrinho', async function (req, res) {
//     let carrinho = await deleteCarrinho(req.body.id);
//        res.json(carrinho)
// });

createCarrinho();

export default routerCarrinho;