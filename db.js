const mongoose=require("mongoose")
require("dotenv").config()

// mongodb+srv://root:<password>@cluster0.hbffmcu.mongodb.net/?retryWrites=true&w=majority

const connection=mongoose.connect(process.env.mongoURL)

// const connection=mongoose.connect("mongodb://localhost:27017/microsoft")

module.exports={
    connection
}