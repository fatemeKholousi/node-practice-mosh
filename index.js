const express = require("express");
const genres=require("./routes/genres")
const customers=require("./routes/customers")
const app=express()

const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost/vidly-backend").then(()=>console.error("you connected to vidly backend")).catch(error=>console.log(error))


app.use(express.json())
app.use("/api/genres",genres)
app.use("/api/customers",customers)

const port=process.env.PORT||5555;
app.listen(port,()=>console.log(`listening from port ${port}`))