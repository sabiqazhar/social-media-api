const router = require('express').Router()
const bodyParser = require('body-parser')

const {getUser, deleteUser, updateUser} = require('../controllers/users')

const jsonParser = bodyParser.json()

router.get("/:id", getUser)
router.put("/:id", jsonParser, updateUser)
router.delete("/:id", jsonParser, deleteUser)

module.exports = router