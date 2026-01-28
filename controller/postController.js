const Post = require("../models/post")

const addPost = async (req,res)=>{
    try {
        const {content,studentId} = req.body;

        const post = await Post.create({
            content,
            studentId
        });
        console.log("Post added")
        res.status(200).send("Post added successfully!")
    } catch (error) {
            res.status(500).send("Unable to add post")
    }
}






const getPosts = async (req,res) => {
    try {
        const post = await Post.findAll()
        console.log("All posts fetched")
        res.status(200).json(post)
    } catch (error) {
        res.status(500).send("Unable to get posts")
    }
}




const getPost = async (req,res) =>{
    try {
        const {id} = req.params

        const post = await Post.findByPk(id)
        if (!post){
            res.status(404).send("Post not found")
            return
        }
        console.log("Post fetched")
        res.status(200).json(post)
    } catch (error) {
        res.status(500).send("Unable to fetch post")
    }
}




const updatePost = async (req,res)=>{
    try {
        const {id} = req.params
        const {content}= req.body
        // const student = await Student.findByPk(id)
        const [updatedRows] = await Post.update(
            {content},
            {where: {id}}
        )

        if (updatedRows === 0){
            res.status(404).send("Post not found")
            return
        }


        console.log("Post updated")
        res.status(200).send("Post updated")
    } catch (error) {
        res.status(500).send("Unable to update post")
    }
}




const deletePost = async (req,res)=>{
    try {
        const {id} = req.params
        const post = await Post.destroy({
            where:{
                id:id
            }
        })

        if(!post){
            res.status(404).send("Post not found")
            return
        }
        console.log("Post deleted")
        res.status(200).send("Post is deleted")
    } catch (error) {
        res.status(500).send("Post not deleted")
    }
}




module.exports = {
    addPost,
    getPosts,
    getPost,
    updatePost,
    deletePost
}