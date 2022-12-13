// import express from 'express';
// import fs from 'fs';
// import https from 'https';
// import cors from 'cors';

// const app = express();
// app.use(express.json());
// app.use(cors());

// import router from './routes.js'
// app.use(router);

// app.listen( 3000, ()=>console.log("Api Rodando."))

// https.createServer({
//     cert: fs.readFileSync('src/SSL/code.crt'),
//     key: fs.readFileSync('src/SSL/code.key')
// }, app).listen(3000, ()=> console.log("Rodando em https"));




// import {openDb} from './configDB.js';

import { createCarrinho, insertCarrinho, selectCarrinhos, selectCarrinho, updateCarrinho, deleteCarrinho } from './controller/Carrinho.js';
import express from 'express';

const app = express();

app.use(express.json());

import routerUsuario from '../routers/UsuarioRouter.js';
import routerProdutos from '../routers/ProdutosRouter.js';

app.use(routerUsuario);
app.use(routerProdutos);
// app.use(routerCarrinho);


// CARRINHO!!!!!!!!!

app.get('/carrinhos', async function (req, res) {
    let carrinhos = await selectCarrinhos();
       res.json(carrinhos)
});

app.get('/carrinho', async function (req, res) {
    let carrinho = await selectCarrinho(req.body.id);
       res.json(carrinho)
   });

app.post('/carrinho', function (req, res) {
    insertCarrinho(req.body)
    res.json({
        "statucCode": 200
    })
});

app.put('/carrinho', function (req, res) {
    if (req.body && !req.body.id) {
        res.json({
            "statusCode": "400",
            "msg": "Você precisa informar um id"
        })
    } else {
        updateCarrinho(req.body)
        res.json({
            "statucCode": 200
        })
    }

});

app.delete('/carrinho', async function (req, res) {
    let carrinho = await deleteCarrinho(req.body.id);
       res.json(carrinho)
});





app.listen(3000);