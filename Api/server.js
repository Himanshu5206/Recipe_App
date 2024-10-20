import express from "express";
import mongoose from "mongoose";
import userRouter from './routes/user.js'
import bodyParser from 'express'
import receipeRouter from './routes/receipe.js'
import cors from 'cors'

const app = express();
app.use(bodyParser.json())

app.use(cors({
  origin:true,
  method:['GET','POST','PUT','DELETE'],
  credentials:true
}))

app.use('/api',userRouter)

//Receipe Router
app.use('/api',receipeRouter)

mongoose.connect(
    "mongodb+srv://himanshu502061:4adujzPgQQXT21vM@cluster0.plhxxe7.mongodb.net/",
  {
    dbName: "MERN_Receipe_App",
  }
)
.then(()=>console.log("Mongo db is Connected..!"))
.catch((err) => console.log(err.message));

const port = 3000;

app.listen(port,()=>console.log(`server is running on port ${port}`))

//username - himanshu502061
//Password - 4adujzPgQQXT21vM
