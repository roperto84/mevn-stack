import { Sequelize } from 'sequelize-typescript';

export const db = new Sequelize('test_db', 'root', 'Password@1234',{
    host: '127.0.0.1',
    dialect: 'mysql',
    database: 'test_db',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
});

export default db;