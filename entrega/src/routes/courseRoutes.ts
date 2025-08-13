import { Router } from "express";
import { CourseController } from "../controllers/courseController";

const router = Router();

const controller = new CourseController();

router.get('/course', controller.list);
router.post('/course', controller.create);
router.put('/course/:id', controller.update);
router.delete('/course/:id', controller.delete);
router.get('/course/:id', controller.getById);
 
export default router;