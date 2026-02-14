import { Express } from "express";
import jwt from "jsonwebtoken";
import {JWT_SECRET} from "./config";
import { middleware } from "./middleware";
import { Request, Response } from "express";

const app = require("express")();


app.post("/signup",(req:Request,res:Response)=>{
    
    res.json({
        userId: 123
    })
})

app.post("/signin",(req:Request,res:Response)=>{

    const userId = 1;
    const token = jwt.sign({
        userId
    }, JWT_SECRET);
    res.json({
        token
    })
})

app.post("/room",middleware,(req:Request,res:Response)=>{
//db call 
res.json({
    roomId : 123
})
})

app.listen(3000, () => console.log("http-backend listening on port 3000"));