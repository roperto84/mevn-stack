import mongoose, { Schema, Document } from 'mongoose'

const PhotoSchema = new Schema({
    title: String,
    description: String,
    imagePath: String
});

export interface IPhoto extends Document {
    title: string;
    description: string;
    imagePath: string;
}

const DB = mongoose.connection.useDb('test');
export default DB.model<IPhoto>('Photo', PhotoSchema);