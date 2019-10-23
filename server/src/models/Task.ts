import mongoose, { Document, Schema } from 'mongoose';

export interface ITask extends Document {
    title: string;
    description: string;
    createdAt?: Date;
};

const TaskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() },
});

//export default model<ITask>('Task', TaskSchema);

const DB = mongoose.connection.useDb('test');
export default DB.model<ITask>('Task', TaskSchema);