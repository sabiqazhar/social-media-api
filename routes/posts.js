const router = require('express').Router()

router.get("/api/v1/post", (req, res)=>{
    res.send("this post endpoint!")
})

module.exports = router