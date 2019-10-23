import { Router } from 'express';
import { users, getUser } from '../controllers/UserController'
//import verifyToken from '../middlewares/verifyToken'

const userRouter = Router();

userRouter.get('/', users);
userRouter.get('/:id', getUser);
// router.post('/api/users/login', UserController.login);
// router.get('/api/users/logout', UserController.logout);

export default userRouter;