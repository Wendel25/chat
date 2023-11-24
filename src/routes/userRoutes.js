const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Cria um novo usuário
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *           example:
 *             name: usuário
 *             lastName: usuário
 *             email: usuario.usuario@example.com
 *             password: senha123
 *     responses:
 *       200:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Erro ao criar o usuário
 */
router.post('/', userController.createUser);

module.exports = router;
