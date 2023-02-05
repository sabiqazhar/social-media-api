const router = require('express').Router()

router.get("/user", (req, res)=>{
    res.send("this users endpoint!")
})

module.exports = router