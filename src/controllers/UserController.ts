import { Request, Response } from 'express';
import { connection } from '../config/database';

export class UserController {
  async list(req: Request, res: Response): Promise<Response> {
    const [rows] = await connection.query('SELECT * FROM usuarios');
    return res.status(200).json(rows);
  }

  async login(req: Request, res: Response): Promise<Response> {
    const { email, nome } = req.body;
  
    try {
      const [rows]: [any[], any] = await connection.query(
        'SELECT * FROM usuarios WHERE email = ? AND nome = ?',
        [email, nome]
      );
  
      if (rows.length === 0) {
        return res.status(401).json({ mensagem: 'Credenciais inválidas.' });
      }
  
      return res.status(200).json({ mensagem: 'Login bem-sucedido!', usuario: rows[0] });
    } catch (error) {
      console.error('Erro ao realizar login:', error);
      return res.status(500).json({ mensagem: 'Erro' });
    }
  }

  async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const [rows]: any = await connection.query('SELECT * FROM usuarios WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
    }
    return res.status(200).json(rows[0]);
  }

  async getByName(req: Request, res: Response): Promise<Response> {
    const { nome } = req.params;
    const [rows]: any = await connection.query('SELECT * FROM usuarios WHERE nome = ?', [nome]);
    if (rows.length === 0) {
      return res.status(404).json({ mensagem: 'Nome do usuário não encontrado.' });
    }
    return res.status(200).json(rows[0]);
  } 

  async create(req: Request, res: Response): Promise<Response> {
    const { nome, email } = req.body;
    await connection.query('INSERT INTO usuarios (nome, email) VALUES (?, ?)', [nome, email]);
    return res.status(201).json({ mensagem: 'Usuário criado com sucesso!' });
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { nome, email } = req.body;
    await connection.query('UPDATE usuarios SET nome = ?, email = ? WHERE id = ?', [nome, email, id]);
    return res.status(200).json({ mensagem: 'Usuário atualizado!' });
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    await connection.query('DELETE FROM usuarios WHERE id = ?', [id]);
    return res.status(204).send();
  }
}