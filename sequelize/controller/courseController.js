const Courses = require("../models/courses")
const Student = require("../models/student")

const addCourse = async (req,res)=>{
    try {
        const {name} = req.body
        const course = await Courses.create({
            'name': name,
        })
        res.status(201).send("Course added.successfully.")


    } catch (error) {
        res.status(500).send("Unable to add course")
    }
}


const addStudentToCourses = async (req,res)=>{
    try {
        const {studentId,courseId} = req.body
        const student = await Student.findByPk(studentId)
        const course = await Courses.findAll({
            where:{
                id:courseId
            }
        })

        await student.addCourse(course)

        const updatedStudent = await Student.findByPk(studentId,{include:Courses})

        res.status(200).json(updatedStudent)
    } catch (error) {
        res.status(500).send("Unable to add")
    }
}


module.exports = {
    addCourse,
    addStudentToCourses
}