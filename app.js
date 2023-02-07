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
// const local = "mongodb://localhost:27017/socialmed-api"

//midleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

//api route
app.use("/api/users",userRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/posts",postRoutes)

//runner server
mongoose.connect(atlas, options)
 .then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server has running at http://localhost:${PORT}`);
    })
 }).catch(err =>{
    throw err
 })


