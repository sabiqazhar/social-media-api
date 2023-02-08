const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')

const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')
const postRoutes = require('./routes/posts')

const app = express()
const PORT = 8000
const options = {useNewUrlParser: true, useUnifiedTopology: true}

dotenv.config()

const atlas = process.env.MONGOO_URL
// const local = "mongodb://127.0.0.1:27017/sosmedapi"

//midleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

//api route
app.use("/api/user",userRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/post",postRoutes)

//runner server
mongoose.connect(atlas, options)
 .then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server has running at http://localhost:${PORT}`);
    })
 }).catch(err =>{
    throw err
 })


