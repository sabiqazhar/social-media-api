const router = require('express').Router()
const bodyParser = require('body-parser')

const {getUser, deleteUser, updateUser, userFollow, userUnfollow} = require('../controllers/users')

const jsonParser = bodyParser.json()

router.get("/:id", getUser)
router.put("/:id", jsonParser, updateUser)
router.put("/:id/follow", jsonParser, userFollow)
router.put("/:id/unfollow", jsonParser, userUnfollow)
router.delete("/:id", jsonParser, deleteUser)

module.exports = router