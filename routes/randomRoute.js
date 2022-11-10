const express = require("express")
const router = express.Router()


router.get("/hello", async (req, res) => {
    try {
        res.send("server test")
    } catch (err) {
        res.send(err)
    }
})