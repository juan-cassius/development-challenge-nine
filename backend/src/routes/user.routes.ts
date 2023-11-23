import { Router } from 'express';
import UserController from '../controllers/UserController';
import Validations from '../middlewares/Validation';

const userController = new UserController();

const router = Router();

router.get('/', (req, res) => userController.getAllUsers(req, res));

router.get('/:id', (req, res) => userController.getUserById(req, res));

router.post(
  '/login',
  Validations.validateLogin,
  (req, res) => userController.login(req, res),
);

export default router;
