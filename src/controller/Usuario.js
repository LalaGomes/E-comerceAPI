import { openDb } from "../configDB.js";

export async function createTable() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Usuario ( id INTEGER PRIMARY KEY, nome VARCHAR(60), email VARCHAR(70), senha VARCHAR(60))')
    })
}

export async function selectUsuarios(req, res) {
    openDb()
        .then(db => {
            db.all('SELECT * FROM Usuario')
                .then(usuarios => res.json(usuarios))
        })
};

export async function selectUsuario(req, res) {
    let id = req.body.id;
    openDb()
        .then(db => {
            db.get('SELECT * FROM Usuario WHERE id=?', [id])
                .then(usuario => res.json(usuario))
        });
}


export async function insertUsuario(req, res) {
    let usuarios = req.body;
    openDb().then(db => {
        db.run('INSERT INTO Usuario (nome, email,senha) VALUES (?,?,?)', [usuarios.nome, usuarios.email, usuarios.senha]);
    });
    res.json({
        "statuscode": 200
    })
};

export async function updateUsuario(req, res) {
    let usuario = req.body;
    openDb()
        .then(db => {
            db.run('UPDATE Usuario SET nome=?, email=?, senha=? WHERE id=?', [usuario.nome, usuario.email, usuario.senha, usuario.id])
        });
    res.json({
        "statuscode": 200
    })
};

export async function deleteUsuario(req,res) {
    let id = req.body.id;
    openDb().then(db => {
        db.get('DELETE FROM Usuario WHERE id=?', [id])
            .then(res => res);
    });
    res.json({
        "statuscode": 200
    })
};

export async function loginUsuario(req, res) {
    let email = req.body.email;
    let senha = req.body.senha;
    openDb()
        .then(db => {
            db.get('SELECT * FROM Usuario WHERE email=? AND senha=?', [email, senha])
            .then(usuarios => usuarios?res.json(usuarios):res.json({"Error":"não possui o usuário buscado"}))
        })
}

/////MINHA INDGNAÇAÃO
// routerUsuario.post('/login', function(req, res){
//     if (usuario.email === usuario.email && usuario.senha === usuario.senha) {
//         loginUsuario(req.body)
//         res.json({
//             "statusCode": 200,
//             "msg": "Login efetuado com sucesso"
//         })
//     } else {
//         res.json({
//             "statucCode": 400
//         })
//     }
// })








