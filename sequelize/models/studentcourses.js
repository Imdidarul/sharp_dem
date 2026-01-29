const {Sequelize,DataTypes} = require("sequelize")
const sequelize = require("../utils/db_connection")



const studentcourses = sequelize.define("studentcourses",{
    id:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement:true
    }
})

module.exports = studentcourses