const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        require: true,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        require: true,
        min: 8
    },
    profilePicture: {
        type: String,
        default: ""
    },
    coverPicture: {
        type: String,
        default: ""
    },
    followers: {
        type: Array,
        default: []
    },
    followings: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    // desc: {
    //     type: String,
    //     max: 50
    // },
    // city: {
    //     type: String,
    //     max: 15
    // },
    // from: {
    //     type: String,
    //     max: 15
    // },
    // relationship: {
    //     type: Number,
    //     default: [1, 2, 3]
    // }
},
{timestamps: true}
)


module.exports = mongoose.Model("user", userSchema)