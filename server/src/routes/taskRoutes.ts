import { Router } from 'express';
import { tasks, getTask, createTask, updateTask, deleteTask } from '../controllers/TaskController'

const taskRouter = Router();

taskRouter.get('/', tasks);
taskRouter.get('/:id', getTask);
taskRouter.post('/create', createTask);
taskRouter.put('/:id', updateTask);
taskRouter.delete('/:id', deleteTask);

export default taskRouter;