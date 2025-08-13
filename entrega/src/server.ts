import express, { Application } from "express";
import CourseRoutes from "./routes/courseRoutes";
import StudentRoutes from "./routes/studentRoutes";

const app: Application = express();
const PORT: number = 3000;

app.use(express.json()); // Define que minha api trabalha com json
app.use(CourseRoutes, StudentRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
