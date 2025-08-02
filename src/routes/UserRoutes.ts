import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();

const controller = new UserController();

router.get('/users', controller.list);
router.post('/users', controller.create);
router.put('/users/:id', controller.update);
router.delete('/users/:id', controller.delete);
router.get('/users/nome/:nome', controller.getByName);
router.get('/users/:id', controller.getById);
router.post('/login', controller.login);
 
export default router;
