const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const registroRouter = express.Router();
registroRouter.post('/registrar', (req, res) => {
  const dadosRegistro = req.body;
  res.json({ mensagem: 'Registro realizado com sucesso', dados: dadosRegistro });
});

const loginRouter = express.Router();
loginRouter.post('/login', (req, res) => {
  const dadosLogin = req.body;
  res.json({ mensagem: 'Login realizado com sucesso', dados: dadosLogin });
});

app.use('/registro', registroRouter);
app.use('/login', loginRouter);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
