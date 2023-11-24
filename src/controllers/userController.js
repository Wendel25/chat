const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'chat',
});

const createUser = (req, res) => {
  const { name, lastName, email, password } = req.body;

  const sql = 'INSERT INTO userRegister (name, lastName, email, password) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, lastName, email, password], (err, result) => {
    if (err) {
      console.error('Erro ao inserir usuário no banco de dados:', err);
      res.status(500).json({ error: 'Erro interno ao criar usuário' });
    } else {
      res.status(200).json({ message: 'Usuário criado com sucesso' });
    }
  });
};

module.exports = {
  createUser,
};
