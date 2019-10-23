import Admin from '../models/Admin';
import { signupValidation, signinValidation } from '../libs/joi'
import jwt from 'jsonwebtoken';

export const admins = async (_req: any, res: any): Promise<void> => {
    const admin = await Admin.find().select("-password").sort({createdAt: 'asc'});
    res.json(admin);
};

export const getAdmin = async (req: any, res: any): Promise<void> => {
    
    const admin = await Admin.findById(req.params.id, { password: 0 });
    if (!admin) return res.status(404).json('No User found');
    
    res.json(admin);
};

export const createAdmin = async (req: any, res: any): Promise<void> => {
    const { error } = signupValidation(req.body);
    
    if (error) return res.status(400).json({errors: error.message});

    const { name, email, password } = req.body;
    
    const emailAdmin = await Admin.findOne({ email: email });
    if (emailAdmin) return res.status(400).json({errors: 'Email already exists'});
    
    try {
        const newAdmin = new Admin({ name, email, password });
        newAdmin.password = await newAdmin.generateHash(newAdmin.password);
        const savedAdmin = await newAdmin.save();

        let token: string = jwt.sign({ id: savedAdmin.id }, process.env['TOKEN_SECRET'] || '', {
            expiresIn: 60 * 60 * 24
        });

        res.json({ auth: true, token });
    
    } catch(err) {
        res.status(400).json(err);
    }
};

export const updateUser = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
    const admin = await Admin.findByIdAndUpdate(id, req.body, {new: true});

    if (admin && req.body.password) {
        admin.password = await admin.generateHash(req.body.password);
        await admin.save()
    }
    
    res.json(admin);
};

export const deleteUser = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
    const admin = await Admin.findByIdAndRemove(id);
    res.json(admin);
};

export const login = async (req: any, res: any): Promise<void> => {
    
    const { error } = signinValidation(req.body);
    if (error) return res.status(400).json({errors: error.message});

    const admin = await Admin.findOne({email: req.body.email})
    if (!admin) return res.status(400).json({errors: 'Email or Password is wrong'});
    
    const validPassword = await admin.validPassword(req.body.password);
    
    if (!validPassword) return res.status(400).json({errors: 'Invalid Password'});
    
    const token: string = jwt.sign({id: admin.id}, process.env['TOKEN_SECRET'] || '', {
        expiresIn: 60 * 60 * 24
    });
    
    res.status(200).json({auth: true, token, data: admin});
};

interface IPayload {
    id: string;
    iat: number;
}

export const user = async (req: any, res: any): Promise<void> => {
    
    const authorization = req.headers.authorization;
    const token = authorization.split(" ");
    const payload = jwt.verify(token[1], process.env['TOKEN_SECRET'] || '') as IPayload;
    
    const admin = await Admin.findById(payload.id, { password: 0 });
    if (!admin) return res.status(404).json('No User found');

    res.json(admin)
};