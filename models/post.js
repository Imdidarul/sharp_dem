const {Sequelize,DataTypes} = require('sequelize');
const sequelize = require("../utils/db_connection")

const post = sequelize.define(
    'post',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        content:{
            type: DataTypes.STRING,
            allowNull: false
        },
        studentId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }        
    }
)


module.exports = post