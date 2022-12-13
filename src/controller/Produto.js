import { openDb } from "../configDB.js";

export async function createProduto() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Produto ( id INTEGER PRIMARY KEY, titulo VARCHAR(60), descricao VARCHAR(120), valor REAL)')
    })
};

export async function selectProdutos(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM Produto')
            .then(produtos => res.json(produtos));
    })
};

export async function selectProduto(req, res) {
    let id = req.body.id;
    openDb().then(db => {
        db.get('SELECT * FROM Produto WHERE id=?', [id])
            .then(produto => res.json(produto));
    })
};

export async function insertProduto(req, res) {
    let produto = req.body;
    openDb().then(db => {
        db.run('INSERT INTO Produto (titulo, descricao, valor) VALUES (?,?,?)', [produto.titulo, produto.descricao, produto.valor]);
    });
    res.json({
        "statuscode": 200
    })
};

export async function updateProduto(req, res) {
    let produto = req.body;
    openDb().then(db => {
        db.run('UPDATE Produto SET titulo=?, descricao=?, valor=? WHERE id=?', [produto.titulo, produto.descricao, produto.valor, produto.id]);
    });
    res.json({
        "statuscode": 200
    })
};

export async function deleteProduto(req, res) {
    let id = req.body.id;
    openDb().then(db => {
        db.get('DELETE FROM Produto WHERE id=?', [id])
            .then(res => res);
    });
    res.json({
        "statuscode": 200
    })
};