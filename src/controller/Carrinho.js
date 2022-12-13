import { openDb } from "../configDB.js";

export async function createCarrinho() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Carrinhos (id INTEGER PRIMARY KEY, usuario_id INTEGER,produto_id INTEGER,  status VARCHAR(70), FOREIGN KEY(usuario_id) REFERENCES Usuarios(id),FOREIGN KEY(produto_id) REFERENCES Produtos(id))')
    })
};

export async function selectCarrinhos(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM Carrinhos')
            .then(carrinhos => res.json(carrinhos));
    })
};

export async function selectCarrinho(req, res) {
    let id = req.body.id;
    openDb().then(db => {
        db.get('SELECT * FROM Carrinhos WHERE id=?', [id])
            .then(carrinho => res.json(carrinho));
    })
};

export async function insertCarrinho(req, res) {
    let carrinho = req.body;
    openDb().then(db => {
        db.run('INSERT INTO Carrinhos (usuario_id, produto_id, status) VALUES (?,?,?)', [carrinho.usuario_id, carrinho.produto_id, carrinho.status]);
    });
    res.json({
        "statuscode": 200
    })
};


export async function updateCarrinho(req, res) {
    let carrinho = req.body;
    openDb().then(db => {
        db.run('UPDATE Carrinhos SET usuario_id=?, produto_id=?, status=? WHERE id=?', [carrinho.usuario_id, carrinho.produto_id, carrinho.status, carrinho.id]);
    });
    res.json({
        "statuscode": 200
    })
};


export async function deleteCarrinho(req, res) {
    let id = req.body.id;
    openDb().then(db => {
        db.get('DELETE FROM Carrinhos WHERE id=?', [id])
            .then(res => res);
    })
    res.json({
        "statuscode": 200
    })
};