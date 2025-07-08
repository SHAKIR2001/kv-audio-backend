import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";   
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config(); //load the environmental varibale file(.env file)

const app = express(); //Access express from variable app 

app.use(bodyParser.json());  //need to add this before the other functions (middleware)

app.use((req,res,next)=>{   //middleware 
    
    let token = req.header( "Authorization" )
    
    if ( token != null )
    {
        token = token.replace( "Bearer ","")

        jwt.verify(token, "kv-secret-89!",
            (err,decoded)=>{

                if (!err){
                    req.user =  decoded;
                }
            }
         )
    }

    next()
})




//mongoDB connection
const mongoUrl = process.env.MONGO_URL;
mongoose.connect(mongoUrl);
const connection  = mongoose.connection;
connection.once("open", ()=>{
    console.log( "MongoDB connected successfully ✅" );
});


app.use( "/api/users", userRouter);
app.use( "/api/products", productRouter)











app.listen(3000, ()=>{
    console.log( "Server is running on port 3000 🚀" );
});

