import { model, Schema } from 'mongoose';

export interface User{
    id:string,
    Username:string,
    Email:string,
    Mobile:number,
    address:string,
    Password:string,
    isAdmin:boolean,
}

export const userSchema = new Schema<User>({
    Username:{type:String, required:true},
    Email:{type:String, required:true, unique:true},
    Mobile:{type:Number, required:true, unique:true},
    address:{type:String, required:true},
    Password:{type:String, required:true},
    isAdmin: {type:Boolean, required:true},
},{
    timestamps:true,
    toJSON:{
        virtuals:true
    },
    toObject:{
        virtuals:true
    }
});

export const UserModel =  model<User>('user',userSchema);