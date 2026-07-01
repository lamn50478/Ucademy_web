"use server"
import "./polyfill";
import mongoose from "mongoose";
//singleton connection : check keets noi 1 lan thoi
export const connectToDatabase=async ()=>{
        if(!process.env.MONGODB_URL){
            throw new Error("MONGODB URL is not set");
        }
        if(mongoose.connection.readyState === 1){
            console.log("MONGODB is already connected----");
            return;
        }
        if(mongoose.connection.readyState === 2){
            console.log("MONGODB is connecting----");
            return;
        }

        try {
            await mongoose.connect(process.env.MONGODB_URL,{
                dbName:"Ucademy",
                family: 4,
                serverSelectionTimeoutMS: 5000
            });
            console.log("MONGODB is connected----");
        } catch (error) {
            console.error("Failed to connect MONGODB XXX:", error);
            throw error;
        }
}