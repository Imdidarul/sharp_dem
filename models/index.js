const Student = require("./student")
const Post = require("./post")


Student.hasMany(Post, {
    foreignKey: "studentId",
    onDelete: "CASCADE"
})

Post.belongsTo(Student, {
    foreignKey: "studentId"
})

module.exports = {
    Student,
    Post
}
