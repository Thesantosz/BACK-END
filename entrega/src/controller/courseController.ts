import { Request, Response } from "express";
import { connection } from "../database/connection";

export class CourseController {
  async list(req: Request, res: Response): Promise<Response> {
    const [rows] = await connection.query("SELECT * FROM courses");
    return res.status(200).json(rows);
  }

  async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const [rows]: any = await connection.query(
      "SELECT * FROM courses WHERE id = ?",
      [id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ mensagem: "Curso não encontrado." });
    }
    return res.status(200).json(rows[0]);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { name, description } = req.body;
    await connection.query(
      "INSERT INTO courses (name, description) VALUES (?, ?)",
      [name, description]
    );
    return res.status(201).json({ mensagem: "Curso criado!" });
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, description } = req.body;
    await connection.query(
      "UPDATE courses SET name = ?, description = ? WHERE id = ?",
      [name, description, id]
    );
    return res.status(200).json({ mensagem: "Curso atualizado!" });
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    await connection.query("DELETE FROM courses WHERE id = ?", [id]);
    return res.status(204).send();
  }
}
