import { openDb } from "../configDB.js";

export async function createCarrinho(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Carrinhos (id INTEGER PRIMARY KEY, usuario_id INTEGER,produto_id INTEGER,  status VARCHAR(70), FOREIGN KEY(usuario_id) REFERENCES Usuarios(id),FOREIGN KEY(produto_id) REFERENCES Produtos(id))')
    })
};

export async function insertCarrinho(carrinho) {
    openDb().then(db => {
        db.run('INSERT INTO Carrinhos (usuario_id, produto_id, status) VALUES (?,?,?)', [carrinho.usuario_id, carrinho.produto_id, carrinho.status]);
    })
};


export async function updateCarrinho(carrinho) {
    openDb().then(db => {
        db.run('UPDATE Carrinhos SET usuario_id=?, produto_id=?, status=? WHERE id=?', [carrinho.usuario_id, carrinho.produto_id, carrinho.status, carrinho.id]);
    })
};

export async function selectCarrinhos() {
    return openDb().then(db => {
        return db.all('SELECT * FROM Carrinhos')
            .then(res => res);
    })
};


export async function selectCarrinho(id) {
    return openDb().then(db => {
        return db.get('SELECT * FROM Carrinhos WHERE id=?', [id])
            .then(res => res);
    })
};


export async function deleteCarrinho(id){
    return  openDb().then(db=>{
        return  db.get('DELETE FROM Carrinhos WHERE id=?', [id])
          .then(res=>res);
      })
  };