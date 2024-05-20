import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    profile:String   // link from cloudinary
} , {timestamps:true})


const User= mongoose.model('user' , userSchema)

export default User