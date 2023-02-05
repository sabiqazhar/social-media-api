const userModel = require('../models/user')
const bcrypt = require('bcrypt')

const register = async (req, res) => {
    const body = req.body

    if (!body.username || !body.email || !body.password) {
        res.status(401).json({
            status: 401,
            message: `Validation error: registration failed` 
        })
        return
    }

    const salt = await bcrypt.genSalt(10)
    const passHash = await bcrypt.hash(body.password, salt)
    const usernameCheck = await userModel.findOne({username: body.username})
    const emailCheck = await userModel.findOne({email: body.email})

    if (usernameCheck || emailCheck) {
        return res.status(401).json({
            message: 'Username or Email already use'
        })
    }

    const user = new userModel({
        username: body.username,
        email: body.email,
        password: passHash
    })

    try {
        const userSave = await user.save()
    
        res.status(201).json({
            status: 201,
            message: 'Registered Successfully',
            data: userSave
        })
    } catch (error) {
        res.status(500).json(err)
    }
}

const login = async (req, res) => {
    const body = req.body

    try {
        const user = await UserModel.findOne({username: body.username})
        if(!user) {
            return res.status(400).json({
                status: 400,
                message: 'username not registered'
            })
        }

        const comparePass = await bcrypt.compare(body.password, user.password)
        if(!comparePass) {
            return res.status(400).json({
                status: 400,
                message: 'password not resgistered'
            })
        }

        res.status(200).json({
            status: 200,
            message: 'Login Successfully',
            data: user
        })
    } catch (error) {
        res.status(500).json(err)
    }
}

module.exports = {register, login}