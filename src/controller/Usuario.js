import { openDb } from "../configDB.js";

export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Usuario ( id INTEGER PRIMARY KEY, nome VARCHAR(60), email VARCHAR(70), senha VARCHAR(60))')
    })
}


// export async function checarSeLogado(req, res) {
//     let email = req.body.email;
//     let senha = req.body.senha;
//     openDb()
//         .then(db => {
//             db.get('SELECT * FROM Usuarios WHERE email=? AND senha=?', [email, senha])
//             .then(usuarios => usuarios?res.json(usuarios):res.json({"Error":"não possui o usuário buscado"}))
//         })
// }

export async function loginUsuario(email,senha){
    return  openDb().then(db=>{
        return  db.get('SELECT * FROM Usuario WHERE email=? AND senha=?', [email,senha])
          .then(res=>res)
          .then(usuarios => usuarios?res.json(usuarios):res.json({"Error":"não possui o usuário buscado"}))
      })
  };


export async function insertUsuario(usuario){
    openDb().then(db=>{
        db.run('INSERT INTO Usuario (nome, email) VALUES (?,?)', [usuario.nome, usuario.email, usuario.senha]);
    })
};

export async function updateUsuario(usuario){
    openDb().then(db=>{
        db.run('UPDATE Usuario SET nome=?, email=?, senha=? WHERE id=?', [usuario.nome, usuario.email, usuario.senha, usuario.id]);
    })
};


export async function selectUsuarios(){
  return  openDb().then(db=>{
      return  db.all('SELECT * FROM Usuario')
        .then(res=>res);
    })
};

export async function selectUsuario(id){
    return  openDb().then(db=>{
        return  db.get('SELECT * FROM Usuario WHERE id=?', [id])
          .then(res=>res);
      })
  };

export async function deleteUsuario(id){
    return  openDb().then(db=>{
        return  db.get('DELETE FROM Usuario WHERE id=?', [id])
          .then(res=>res);
      })
  };