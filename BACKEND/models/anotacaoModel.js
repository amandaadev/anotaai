import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

const Anotacao = sequelize.define(
    "Anotacao", 
    {
        id_anotacao:{
            type: DataTypes.INTEGER, //define o tipo do atributo
            primaryKey: true, //confirma se é PK
            autoIncrement: true, //confima se o valor é auto incrementado
            allowNull: false //confirma se o valor pode ser nulo
        },
        descricao:{
            type: String,
            primaryKey: false,
            autoIncrement: false,
            allowNull: false,
        }
    }
)