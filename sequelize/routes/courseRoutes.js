const express = require("express")
const router = express.Router()
const courseController = require("../controller/courseController")


router.post('/addcourse',courseController.addCourse)
router.get('/addstudentcourse',courseController.addStudentToCourses)

module.exports = router