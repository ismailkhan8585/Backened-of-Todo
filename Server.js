const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")

const routes = require('./routes/TodoRoutes')


require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())
console.log("process.env.MONGOODB_URL):", process.env.MONGOODB_URL)
mongoose
.connect(process.env.MONGOODB_URL)
.then(()=>console.log(`Connected To MongoD............`))
.catch((err)=> console.log(err))

app.use(routes)

app.listen(PORT,()=>console.log(`Listening on :${PORT}`))