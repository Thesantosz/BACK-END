import { Router } from "express";
import { StudentController } from "../controllers/studentController";

const router = Router();

const controller = new StudentController();

router.get('/student', controller.list);
router.post('/student', controller.create);
router.put('/student/:id', controller.update);
router.delete('/student/:id', controller.delete);
router.get('/student/:id', controller.getById);
 
export default router;