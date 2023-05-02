const express=require("express")
const {connection}=require("./db")
const {userRouter}=require("./routes/User.routes")
// const jwt=require("jsonwebtoken")
const {auth}=require("./middleware/auth.middleware")
const {noteRouter}=require("./routes/Note.routes")
require("dotenv").config()

const app=express()

app.use(express.json())
app.use("/users",userRouter)


app.use(auth)
app.use("/notes",noteRouter)






app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("connected to the DB")
    } catch (error) {
        console.log('error:', error)
        console.log("cannot connect to the DB")
        
    }
    console.log(`server is running at port ${process.env.port}`)})