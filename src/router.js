const express = require("express")

const router = express.Router()
const controller = require("./controller/controller")


router.get("/", controller.renderHomePage)

router.post("/", controller.getCovidInfo)

module.exports = router