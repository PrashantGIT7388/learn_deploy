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


// app.get("/",(req,res)=>{
//     res.send("Home Page")
// })

// app.get("/contacts",(req,res)=>{
//     res.send("Contacts Page")
// })

// app.get("/about",(req,res)=>{
//     res.send("About Page")
// })

// Proctected
app.use(auth)
app.use("/notes",noteRouter)
// app.get("/movie",(req,res)=>{
  
//     res.status(200).send("Movie Data")
   
// })

// app.get("/series",(req,res)=>{
 
//     res.status(200).send("Series Data")
   
// })





app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("connected to the DB")
    } catch (error) {
        console.log('error:', error)
        console.log("cannot connect to the DB")
        
    }
    console.log(`server is running at port ${process.env.port}`)})