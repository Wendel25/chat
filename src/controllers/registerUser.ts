import { Controller, Post, StatusResponse, Body } from "express-swagger-autoconfigure";
import { Request, Response } from "express";
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'chat',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

@Controller("/registerUser")
export default class RegisterUser {

    @StatusResponse(200, "Sucesso")
    @Body({
        name: "string",
        lastName: "string",
        email: "string.string@gmil.com",
        password: "string"
    })
    @Post("/register-api")
    public async register(request: Request, response: Response): Promise<Response> {
        try {
            const { name, lastName, email, password } = request.body;

            const [rows] = await pool.execute(
                'INSERT INTO userRegister (name, lastName, email, password) VALUES (?, ?, ?, ?)',
                [name, lastName, email, password]
            );

            return response.status(200).json({ message: 'Usuário registrado com sucesso' });
        } catch (error) {
            console.error('Erro ao registrar usuário:', error);
            return response.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
}
