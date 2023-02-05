const router = require('express').Router()
const bodyParser = require('body-parser')

const {register, login} = require('../controllers/auth')

const jsonParser = bodyParser.json()
router.post("/register", jsonParser, register)
router.post("/login", jsonParser, login)

module.exports = router