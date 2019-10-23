
import { Router } from 'express';
import { admins, 
        getAdmin, 
        login, 
        createAdmin, 
        updateUser, 
        deleteUser, 
        user } from '../controllers/AdminController'
import { verifyToken } from '../middlewares/verifyToken'

const adminRouter = Router();

adminRouter.get('/me', verifyToken, user);
adminRouter.get('/', verifyToken, admins);
adminRouter.get('/:id', verifyToken, getAdmin);
adminRouter.post('/login', login);
adminRouter.post('/create', createAdmin);
adminRouter.put('/:id', verifyToken, updateUser);
adminRouter.delete('/:id', verifyToken, deleteUser);

export default adminRouter;