require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const projectsRoutes = require('./routes/projects')
//express app
const app = express()
//midlleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
//routes
app.use('/api/projects',projectsRoutes)

//connect to db 

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("good")
})
.catch((error)=>{
    console.log(error)
})

//listen for requests

app.listen(process.env.PORT,() => {
    console.log("listening on port 4000")
})
