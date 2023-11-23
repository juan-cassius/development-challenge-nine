import { Router } from 'express';
import patientRouter from './patient.routes';
import userRouter from './user.routes';

const router = Router();

router.use('/user', userRouter);
router.use('/patient', patientRouter);

export default router;
