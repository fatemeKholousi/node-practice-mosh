const express = require("express");
const genres=require("./routes/genres")
const app=express()

const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost/vidly-backend").then(()=>console.error("you connected to vidly backend")).catch(error=>console.log(error))


app.use(express.json())
app.use("/api/genres",genres)

const port=process.env.PORT||3000;
app.listen(port,()=>console.log("listening from port"))