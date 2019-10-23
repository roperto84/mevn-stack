import { Router } from 'express';
import { posts, getPost } from '../controllers/PostController'

const postRouter = Router();

postRouter.get('/', posts);
postRouter.get('/:id', getPost);

export default postRouter;