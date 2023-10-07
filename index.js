import express from "express";
import router from "./routes/routes.js";
import cors from 'cors';
import DBConnection from "./database/db.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// const corsOrigin ={
//     origin:'https://file-swift-uploader.vercel.app', //or whatever port your frontend is using
//     credentials:true,            
//     optionSuccessStatus:200
// }
// app.use(cors(corsOrigin));

app.use(cors());
//  app.use(cors({
//       origin:["https://file-swift-uploader.vercel.app"],
//       methods:["POST","GET","DELETE"],
//       credentials:true
//  }));
//  app.use(cors({
//     origin: 'https://file-swift-uploader.vercel.app',
//   }));
  

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
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