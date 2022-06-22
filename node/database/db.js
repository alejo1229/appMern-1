import {Sequelize} from "sequelize";

const db = new Sequelize('database_appmern','root','',{
    host:'localhost',
    dialect: 'mysql'
});

export default db;