import Sequelize, { Model } from 'sequelize'
import db from '../db/mysql'

export interface UserModel extends Model<UserModel, any> {
    id: number
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    encryptPassword(password: string): string
    matchPassword(password: string): boolean
}

export const User = db.define<UserModel, any>('user', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    created_at: {
        type: Sequelize.DATE,
        defaultValue: new Date()
    },
    updated_at: {
        type: Sequelize.DATE,
        defaultValue: new Date()
    }
},
    {
        freezeTableName: true,
        tableName: 'users',
        // instanceMethods: {
        //     async encryptPassword(password: string) {
        //         const salt = await bcrypt.genSalt(10);
        //         const hash = await bcrypt.hashSync(password, salt);
        //         return hash;
        //     },
        //     async matchPassword(password: string) {
        //         return await bcrypt.compareSync(password, this.password);
        //     }
        // }
    }
);

export default User;