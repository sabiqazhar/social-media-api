const userModel = require('../models/user')
const bcrypt = require('bcrypt')

//update detail user
const updateUser = async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(req.body.password, salt) 
            } catch (error) {
                return res.status(500).json({
                    status: 500,
                    message: error
                })
            }
        }

        try {
            const user = await userModel.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            })
            return res.status(200).json({
                status: 200,
                message: "Account has been updated!",
                data: user
            })
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: error
            })
        }
    } else {
        return res.status(403).json({
            status: 403,
            message: "You can update only your account!"
        })
    }
}

//delete user 
const deleteUser = async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            await userModel.findByIdAndDelete(req.params.id)
            return res.status(200).json({
                status: 200,
                message: "Account has been deleted"
            })
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: error
            })
        }
    } else {
        return res.status(403).json({
            status: 403,
            message: "You can delete only your account!"
        })
    }
}

//get user
const getUser = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id)
        const {password, updateAt, ...other} = user._doc
        return res.status(200).json({
            status: 200,
            message: other
        })
    } catch (error) {
        return res.status(403).json({
            status: 403,
            message: error
        })
    }
}

//follow user
const userFollow = async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await userModel.findById(req.params.id) //target user
            const currentUser = await userModel.findById(req.body.userId) // user (you) 
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId } })
                await currentUser.updateOne({ $push: { followings: req.body.userId } })
                return res.status(200).json({
                    status: 200,
                    message: "user has been followed",
                })
            }
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: error
            })
        }
    } else {
        return res.status(403).json({
            status: 403,
            message: "you cant follow yourself"
        })
    }
}


unfollow
const userUnfollow = async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await userModel.findById(req.params.id) //target user
            const currentUser = await userModel.findById(req.body.userId) // user (you) 
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: req.body.userId } })
                await currentUser.updateOne({ $pull: { followings: req.body.userId } })
                return res.status(200).json({
                    status: 200,
                    message: "user has been unfollowed",
                })
            }
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: error
            })
        }
    } else {
        return res.status(403).json({
            status: 403,
            message: "you cant unfollow yourself"
        })
    }
}


module.exports = {getUser, deleteUser, updateUser, userFollow, userUnfollow}