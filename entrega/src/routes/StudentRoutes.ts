import { Router } from "express";
import { StudentController } from "../controller/studentController";

const router = Router();

const controller = new StudentController();

router.get('/', controller.list);
router.post('/', controller.create);
router.put('/id', controller.update);
router.delete('/:id', controller.delete);
router.get('/:id', controller.getById);
 
export default router;