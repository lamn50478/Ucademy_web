"use server"
import "./polyfill";
import mongoose from "mongoose";
//singleton connection : check keets noi 1 lan thoi
let isConnected:boolean=false;
export const connectToDatabase=async ()=>{
        if(!process.env.MONGODB_URL){
            throw new Error("MONGODB URL is not set");
        }
        if(isConnected){
            console.log("MONGODB is already connected----");
            return;
        }

        try {
            await mongoose.connect(process.env.MONGODB_URL,{
                dbName:"Ucademy"
            });
            isConnected=true;
            console.log("MONGODB is connected----");
        } catch (error) {
            console.error("Failed to connect MONGODB XXX:", error);
            throw error;
        }
}