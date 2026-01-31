const {Sequelize,DataTypes} = require('sequelize');
const sequelize = require("../utils/db_connection")

const user = sequelize.define(
    'user',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false
        }
    }
)


module.exports = user