const router = require('express').Router()

router.get("/post", (req, res)=>{
    res.send("this post endpoint!")
})

module.exports = router