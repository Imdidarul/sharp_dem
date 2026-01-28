// const Student = require("../models/student");
const {Student, Post } = require("../models");

const addStudent = async (req,res)=>{
    try {
        const {name,email,age} = req.body;

        const student = await Student.create({
            name: name,
            email: email,
            age: age
        });
        console.log("Student added")
        res.status(200).send("Student added successfully!")
    } catch (error) {
            res.status(500).send("Unable to add student")
    }
}




const getStudents = async (req,res) => {
    try {
        const student = await Student.findAll()
        console.log("All students fetched")
        res.status(200).json(student)
    } catch (error) {
        res.status(500).send("Unable to get students")
    }
}





const getStudent = async (req,res) =>{
    try {
        const {id} = req.params

        const student = await Student.findByPk(id,{
            include:Post
        })
        if (!student){
            res.status(404).send("Student not found")
            return
        }
        console.log("Student fetched")
        res.status(200).json(student)
    } catch (error) {
        res.status(500).send("Unable to fetch student")
    }
}




const updateStudent = async (req,res)=>{
    try {
        const {id} = req.params
        const {name,email,age}= req.body
        // const student = await Student.findByPk(id)
        const [updatedRows] = await Student.update(
            {name,email,age},
            {where: {id}}
        )

        if (updatedRows === 0){
            res.status(404).send("Student not found")
            return
        }


        console.log("User updated")
        res.status(200).send("User updated")
    } catch (error) {
        res.status(500).send("Unable to update user")
    }
}





const deleteStudent = async (req,res)=>{
    try {
        const {id} = req.params
        const student = await Student.destroy({
            where:{
                id:id
            }
        })

        if(!student){
            res.status(404).send("User not found")
            return
        }
        console.log("User deleted")
        res.status(200).send("User is deleted")
    } catch (error) {
        res.status(500).send("Student not deleted")
    }
}




module.exports = {
    addStudent,
    getStudents,
    getStudent,
    updateStudent,
    deleteStudent
}