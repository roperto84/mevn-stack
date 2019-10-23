import Joi from '@hapi/joi';
import { IAdmin } from '../models/Admin'

export const signupValidation = (data: IAdmin) => {
    const userSchema = Joi.object({
        name: Joi
            .string()
            .min(3)
            .max(30)
            .required(),
        email: Joi
            .string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .required(),
        password: Joi
            .string()
            .min(3)
            .required()
    });
    
    return userSchema.validate(data);
};

export const signinValidation = (data: IAdmin) => {
    const userSchema = Joi.object({
        email: Joi
            .string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .required(),
        password: Joi
            .string()
            .min(3)
            .required()
    });
    return userSchema.validate(data);
};
