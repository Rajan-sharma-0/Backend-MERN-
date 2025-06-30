import { asyncHnadler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {user} from "../models/User.models.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHnadler(async(req, res)=>{
    // get the user data from the frontend
    // validate = check if input are not empty
    // check if user is not already exist : using (username and email)
    // chaeck for image and avtar is successfully upload on cloudnary
    // upload them to cloudinary : avtaer
    // create user object : create entry in db
    // remove the passwore and refresh token field from response
    // check for user creation 
    // return response

    const {fullName, username, email, password} = req.body
    console.log('email :', email );

    if(
        [fullName, username, email, password].some((field)=>
        field?.trim() === ""
        )
    ){ 
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await user.findOne({
        $or: [{ username } , { email }]
    })

    if(existedUser){
        throw new ApiError(409, "user with this email and username is already exist")
    }


    const avtarLocalPath = req.files?.avtar?.[0]?.path;
    const coverImageLocalPath = req.files?.coverImage?.[0]?.path;

    if(!avtarLocalPath){
        throw new ApiError(400, "avtar file is required")
    }

    const avtar = await uploadOnCloudinary(avtarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if(!avtar){
        throw new ApiError(400, "avtar file is not uploaded successfully")
    }

    const newuser = await user.create({
        fullName,
        avtar: avtar.url,
        coverImage: coverImage?.url || "",
        email,
        password, 
        username: username.toLowerCase()
    })

   const createdUser =  await user.findById(newuser._id).select(
        "-password -refreshToken"   // this fiel remove the password and refreshToken form the response
   )

   if(!createdUser){
    throw new ApiError(500, "something went wrong while registring the user")
   }

   return res.status(201).json(
    new ApiResponse(200, createdUser, "user registered successfully")
   )



})



export { registerUser, }


