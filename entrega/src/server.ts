import express, { Application } from "express";
import CourseRoutes from "./routes/CourseRoutes";
import StudentRoutes from "./routes/StudentRoutes";

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());

app.use("/courses", CourseRoutes);
app.use("/students", StudentRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
