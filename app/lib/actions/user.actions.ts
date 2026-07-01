"use server"

import User, { IUser } from "@/app/database/user.model";
import { connectToDatabase } from "../mongoose"
import { TCreateUserParams } from "@/app/types";

export default async function createUser(params:TCreateUserParams){
    try {
        await connectToDatabase();
        const newUser=await User.create(params);
        
        return newUser;
    } catch (error) {
        console.error("Error in createUser action:", error);
        throw error;
    }
}