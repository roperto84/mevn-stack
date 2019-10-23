
import { Router } from 'express';
import { getPhotos, createPhoto, getPhoto, updatePhoto, deletePhoto } from '../controllers/PhotoController'
import upload from '../libs/multer'

const photoRouter = Router();

photoRouter.route('/')
    .get(getPhotos)
    .post(upload.single('image'), createPhoto);

photoRouter.route('/:id')
    .get(getPhoto)
    .delete(deletePhoto)
    .put(updatePhoto);

export default photoRouter;