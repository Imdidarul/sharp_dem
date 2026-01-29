const student = require("./student")
const courses = require("./courses")
const studentcourses = require("./studentcourses")


student.belongsToMany(courses,{through:studentcourses});
courses.belongsToMany(student,{through:studentcourses});


module.exports = {
    student,
    courses,
    studentcourses
}
