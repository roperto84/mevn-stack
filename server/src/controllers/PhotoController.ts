import fs from 'fs-extra';
import path from 'path'
import Photo, { IPhoto } from '../models/Photo';

export const getPhotos = async(_req: any, res: any): Promise<void> => {
    const photos = await Photo.find();
        
    return res.json(photos);
}

export const createPhoto = async(req: any, res: any): Promise<void> => {
    const { title, description } = req.body;
    const imagePath = req.file.path;

    const newPhoto = { title, description, imagePath };
    const photo = new Photo(newPhoto);
    await photo.save();

    return res.json({
        message: 'Photo Saved Successfully',
        photo
    });
}

export const getPhoto = async(req: any, res: any): Promise<void> => {
    const { id } = req.params;
    const photo = await Photo.findById(id);

    return res.json(photo);
}

export const updatePhoto = async(req: any, res: any): Promise<void> => {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatedPhoto = await Photo.findByIdAndUpdate(id, {
        title,
        description
    });

    return res.json({
        message: 'Successfully updated',
        updatedPhoto
    });
}

export const deletePhoto = async(req: any, res: any): Promise<void> => {
    const { id } = req.params;
    const photo = await Photo.findOneAndRemove(id) as IPhoto;
    
    if (photo) await fs.unlink(path.resolve(photo.imagePath));
    
    return res.json({ message: 'Photo Deleted' });
}