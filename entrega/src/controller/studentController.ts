import { Request, Response } from "express";
import { connection } from "../database/connection";

export class StudentController {
  async list(req: Request, res: Response): Promise<Response> {
    const [rows] = await connection.query("SELECT * FROM students");
    return res.status(200).json(rows);
  }

  async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const [rows]: any = await connection.query(
      "SELECT * FROM students WHERE id = ?",
      [id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ mensagem: "Estudante não encontrado." });
    }
    return res.status(200).json(rows[0]);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { name, email, id_course } = req.body;
    await connection.query(
      "INSERT INTO students (name, email, id_course) VALUES (?, ?, ?)",
      [name, email, id_course]
    );
    return res.status(201).json({ mensagem: "Estudante cadastrado" });
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, email, id_course } = req.body;
    await connection.query(
      "UPDATE students SET name = ?, email = ?, id_course = ? WHERE id = ?",
      [name, email, id_course, id]
    );
    return res.status(200).json({ mensagem: "Conta do estudante atualizada!" });
  }
  

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    await connection.query("DELETE FROM students WHERE id = ?", [id]);
    return res.status(204).send();
  }
}
