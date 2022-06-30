const express = require("express")
const app = express();
require('dotenv').config()
const port = require('./config/serverconfig')
const categoryRoutes = require("./routes/category.routes")

categoryRoutes(app)

app.get("/", (req, res)=>{
    res.send("Home Page")
})

app.listen(port.PORT, ()=>{
    console.log(`server has started at port ${port.PORT}`)
})