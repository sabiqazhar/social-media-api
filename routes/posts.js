const router = require('express').Router()
const bodyParser = require('body-parser')

const {createPost, updatePost, deletePost, getPost, likeOrDislike, timeline} = require('../controllers/posts')

const jsonParser = bodyParser.json()

router.post("/", jsonParser, createPost)
router.put("/:id", jsonParser, updatePost)
router.get("/:id", getPost)
router.delete("/:id", jsonParser, deletePost)
router.put("/:id/like", jsonParser, likeOrDislike)
router.get("/timeline/all", jsonParser, timeline)

module.exports = router