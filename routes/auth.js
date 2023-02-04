const router = require('express').Router()

router.get("/api/v1/auth", (req, res)=>{
    res.send("this auth endpoint!")
})

module.exports = router