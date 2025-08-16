import { Router } from "express";
import { CourseController } from "../controller/courseController";

const router = Router();

const controller = new CourseController();

router.get('/', controller.list);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);
router.get('/:id', controller.getById);
 
export default router;