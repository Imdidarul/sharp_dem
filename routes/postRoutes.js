const express = require("express")
const router = express.Router()
const postController = require("../controller/postController")

router.post("/post",postController.addPost)
router.get("/post",postController.getPosts)
router.get("/post/:id",postController.getPost)
router.put("/post/:id",postController.updatePost)
router.delete("/post/:id",postController.deletePost)

module.exports = router