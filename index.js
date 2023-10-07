import express from "express";
import router from "./routes/routes.js";
import cors from 'cors';
import DBConnection from "./database/db.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// const corsOrigin ={
//     origin:'http://localhost:3000', //or whatever port your frontend is using
//     credentials:true,            
//     optionSuccessStatus:200
// }
// app.use(cors(corsOrigin));
 app.use(cors({
      origin:["https://file-swift-uploader.vercel.app/"],
      methods:["POST","GET"],
      credentials:true
 }));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/',router);

const PORT = process.env.PORT || 5000;

DBConnection();

app.listen(PORT,()=>{
    console.log(`server started successfully!! at ${PORT}` )
})