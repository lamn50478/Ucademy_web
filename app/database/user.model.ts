import { Document, model, models, Schema } from "mongoose";
import {  EUserRole, EUserStatus } from "../types/enums";

export interface IUser extends Document {
    clerkId:string;
    name:string;
    username:string;
    avatar:string;
    email:string;
    created_at:Date;
    status:EUserStatus, 
    role:EUserRole;
    courses:Schema.Types.ObjectId[];
}
const userSchema=new Schema<IUser>({
    clerkId:{
        type:String
    },
    name:{
        type:String
    },
    username:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    avatar:{
        type:String
    },
    courses:[
        {
            type:Schema.Types.ObjectId,
            ref:"Course"
        },
    ],
    created_at:{
        type:Date,
        default:Date.now()
    },
    role:{
        type:String,
        enums:Object.values(EUserRole),
        default:EUserRole.USER
    },
    status:{
        type:String,
        enums:Object.values(EUserStatus),
        default:EUserStatus.ACTIVE
    }


})
const User=models.User || model<IUser>("User",userSchema);
export default User;