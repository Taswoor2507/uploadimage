import User from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const registerUser = asyncHandler(async(req,res,next)=>{

    // const {profile} = req.body
    const profileImage = req.file; // Access the uploaded file
    const profileimagePath = profileImage?.path;


    if (!profileImage) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const profile = await uploadOnCloudinary(profileimagePath)
    console.log(profile.url);
    const user = await User.create({profile:profile.url})
    if(user){
        console.log(user);
        res.status(201).json({
            success:true,
            user
        })

        await user.save()
    }else{
        console.log("no create");
        res.status(201).json({
            success:false,
            
        })

    }

})

export default registerUser