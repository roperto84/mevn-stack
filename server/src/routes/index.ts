import adminRouter from "./adminRoutes";
import taskRouter from "./taskRoutes";
import postRouter from "./postRoutes";
import userRouter from "./userRoutes";
import photoRouter from "./photoRoutes";
import { Router } from 'express';

const router = Router();

router.use('/api/admin', adminRouter)
router.use('/api/tasks', taskRouter)
router.use('/api/posts', postRouter)
router.use('/api/users', userRouter)
router.use('/api/photos', photoRouter)

export default router;