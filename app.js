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

//midleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

//api route
app.use(userRoutes)
app.use(authRoutes)
app.use(postRoutes)

//runner server
mongoose.connect(process.env.MONGOO_URL, options)
 .then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server has running at http://localhost:${PORT}`);
    })
 }).catch(err =>{
    throw err
 })


