import { Sequelize } from "sequelize";
import "dotenv/config.js"

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbSenha = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbPorta = process.env.PORT_DB;

const sequelize = new Sequelize(
    dbName,
    dbUser,
    dbSenha,
    {
        dialect: "mysql",
        host: dbHost,
        port: dbPorta //se tiver apenas uma porta não precisa indicar
    }
);


    export { sequelize }; //export nomeado, ou seja, na hora de importar precisa ter o nome que está declarado no arquivo de origem.