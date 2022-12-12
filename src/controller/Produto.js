import { openDb } from "../configDB.js";

export async function createProduto() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Produto ( id INTEGER PRIMARY KEY, titulo VARCHAR(60), descricao VARCHAR(120), valor REAL)')
    })
};


export async function insertProduto(produto) {
    openDb().then(db => {
        db.run('INSERT INTO Produto (titulo, descricao, valor) VALUES (?,?,?)', [produto.titulo, produto.descricao, produto.valor]);
    })
};


export async function updateProduto(produto) {
    openDb().then(db => {
        db.run('UPDATE Produto SET titulo=?, descricao=?, valor=? WHERE id=?', [produto.titulo, produto.descricao, produto.valor, produto.id]);
    })
};

export async function selectProdutos() {
    return openDb().then(db => {
        return db.all('SELECT * FROM Produto')
            .then(res => res);
    })
};


export async function selectProduto(id) {
    return openDb().then(db => {
        return db.get('SELECT * FROM Produto WHERE id=?', [id])
            .then(res => res);
    })
};


export async function deleteProduto(id){
    return  openDb().then(db=>{
        return  db.get('DELETE FROM Produto WHERE id=?', [id])
          .then(res=>res);
      })
  };