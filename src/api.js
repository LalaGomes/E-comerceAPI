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
import { createTable, insertUsuario, updateUsuario, selectUsuarios, selectUsuario, deleteUsuario } from './controller/Usuario.js';
import { createProduto, deleteProduto, insertProduto, selectProduto, selectProdutos, updateProduto} from './controller/Produto.js';
import { createCarrinho, insertCarrinho, selectCarrinhos, selectCarrinho, updateCarrinho, deleteCarrinho } from './controller/Carrinho.js';
import express from 'express';

const app = express();

app.use(express.json());

app.get('/', function (req, res) {
    res.send('Hello Word')
});

app.get('/usuarios', async function (req, res) {
 let usuarios = await selectUsuarios();
    res.json(usuarios)
});

app.get('/usuario', async function (req, res) {
    let usuario = await selectUsuario(req.body.id);
       res.json(usuario)
   });

app.post('/usuario', function (req, res) {
    // console.log(req.body);
    insertUsuario(req.body)
    res.json({
        "statucCode": 200
    })
});

app.put('/usuario', function (req, res) {
    if (req.body && !req.body.id) {
        res.json({
            "statusCode": "400",
            "msg": "Você precisa informar um id"
        })
    } else {
        updateUsuario(req.body)
        res.json({
            "statucCode": 200
        })
    }

});

app.delete('/usuario', async function (req, res) {
    let usuario = await deleteUsuario(req.body.id);
       res.json(usuario)
});

app.post('/login', function(req, res){
    if (req.body && !req.body.senha) {
        res.json({
            "statusCode": "400",
            "msg": "Você precisa informar uma senha"
        })
    } else {
        loginUsuario(req.body)
        res.json({
            "statucCode": 200
        })
    }
})


















// Produtos!!!!!!!



app.get('/produtos', async function (req, res) {
    let produtos = await selectProdutos();
       res.json(produtos)
});

app.get('/produto', async function (req, res) {
    let produto = await selectProduto(req.body.id);
       res.json(produto)
   });

app.post('/produto', function (req, res) {
    insertProduto(req.body)
    res.json({
        "statucCode": 200
    })
});

app.put('/produto', function (req, res) {
    if (req.body && !req.body.id) {
        res.json({
            "statusCode": "400",
            "msg": "Você precisa informar um id"
        })
    } else {
        updateProduto(req.body)
        res.json({
            "statucCode": 200
        })
    }

});

app.delete('/produto', async function (req, res) {
    let produto = await deleteProduto(req.body.id);
       res.json(produto)
});















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