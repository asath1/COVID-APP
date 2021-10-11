const express = require('express')
const app = express()
const router = require('../src/router')

app.use(express.urlencoded({extended: false}))

app.use(express.json())

app.set("views","views")

app.set('view engine', "hbs")

app.use("/", router)


app.listen(3000)