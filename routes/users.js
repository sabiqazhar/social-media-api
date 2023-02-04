const router = require('express').Router()

router.get("/api/v1/user", (req, res)=>{
    res.send("this users endpoint!")
})

module.exports = router