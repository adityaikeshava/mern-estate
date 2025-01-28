import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/user.route.js';
import authrouter from './routes/auth.route.js';
dotenv.config ();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connected to mongodb');
}).catch((err)=>{
    console.log(err);
});
const app=express();
app.use(express.json());
app.listen(3000,()=>{
    console.log("server is running on port 3000");
}
);

app.use("/api/user",router);
app.use("/api/auth",authrouter);
app.use((err,req,res,next)=>{
const statuscode=err.statuscode||500;
const message=err.message||'Internal Server Error';
return res.status(statuscode).json({
    success:"false",
    statuscode,
    message
});
});