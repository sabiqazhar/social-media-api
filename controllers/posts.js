const postModel = require('../models/post')
const userModel = require('../models/user')

//create post
const createPost = async (req, res) => {
    newPost = new postModel(req.body)
    try {
        const savePost = await newPost.save();
        res.status(201).json({
            status: statusbar, //just test, need to change
            message: 'you got a new post!',
            data: savePost
        })
    } catch (error) {
       res.status(500).json({
        status: 500,
        message: error
       }) 
    }
}

//update post
const updatePost = async (req, res) => {
    try {
        const post = await postModel.findById(req.params.id)
        if (post.userId === req.body.userId) {
            await postModel.updateOne({ $set: req.body })
            res.status(200).json({
                status: 200,
                message: "post has been updated!",
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error
        })
    }
}

//delete post
const deletePost = async (req, res) => {
    try {
        const post = await postModel.findById(req.params.id)
        if (post.userId === req.body.userId) {
            await postModel.deleteOne()
            res.status(200).json({
                status: 200,
                message: "post has been deleted!",
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error
        })
    }
}

// likes/dislike
const likeOrDislike = async (req, res) => {
    try {
        const post = await postModel.findById(req.params.id) //post target
        if (!post.likes.indludes(req.body.userId)) {
            await post.updateOne({ $push: {likes: req.body.userId} }) // you
            res.status(200).json({
                status: 200,
                message: "Post has been liked!"
            })
        } else {
            await post.updateOne({$pull: {likes: req.body.userId}})
            res.status(200).json({
                status: 200,
                message: "Post has been dislike!"
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error
        })
    }
}


// get post
const getPost = async (req, res) => {
    try {
        const post = await postModel.findById(req.params.id)
        res.status(200).json({
            status: 200,
            message: 'post has been found',
            data: post
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error
        })
    }
}

// timeline user (user just can see followers posting)
const timeline = async (req, res) => {
    try {
        const currentUser = await userModel.findById(req.body.userId)
        const userPost = await postModel.find({ userId: currentUser._id })
        const friendPost = await Promise.all(
            currentUser.followings.map(friendId => {
                return postModel.find({ userId: friendId })
            })
        )
        res.json(userPost.concat(...friendPost))
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error
        }) 
    }
}

module.exports = {createPost, updatePost, deletePost, getPost, likeOrDislike, timeline}