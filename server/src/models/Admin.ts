import mongoose, { Document, Schema } from 'mongoose'
import bcrypt from 'bcrypt-nodejs'

export interface IAdmin extends Document {
    //_id: string;
    name: string;
    email: string;
    password: string;
    photo: string;
    createdAt: Date;
    generateHash(password: string): Promise<string>;
    validPassword(password: string): Promise<boolean>;
};

const AdminSchema = new Schema({
    //_id: String,
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, },
    photo: { type: String, required: false },
    createdAt: { type: Date, default: Date.now() }
});

// adds a method to a user document object to create a hashed password
AdminSchema.methods.generateHash = async function(password: string): Promise<string> {
	return await bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}

// adds a method to a user document object to check if provided password is correct
AdminSchema.methods.validPassword = async function(password: string): Promise<boolean> {
	return await bcrypt.compareSync(password, this.password)
}

const DB = mongoose.connection.useDb('test');
export default DB.model<IAdmin>('Admin', AdminSchema);
