import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import jwt from 'jsonwebtoken'
import {upload} from '../middlewares/multer.middleware.js'
import { uploadOnCloudinary } from '../utils/cloudinary.js'



const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId)
    
        if(!user){
            throw new ApiError(400, "User not found")
        }
    
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()
    
        user.refreshToken = refreshToken
        await user.save({validateBeforeSave: false})
        return {accessToken, refreshToken}
    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating access and refresh tokens")
    }

}


const registerUser = asyncHandler( async (req, res) =>{
    const {username, name, email, password} = req.body;

    //validation
    if(!username || !name || !email || !password){
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await User.findOne({
        $or: [{username}, {email}]
    })

    if(existedUser) {
        throw new ApiError(409, "User with email or username already exists")
        
    }


    

    const user = await User.create({
      username,
      name,
      email,
      password,
    });

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registering user")
    }

    return res
        .status(200)
        .json(new ApiResponse(200, createdUser, "User registered successfully"))
})

const loginUser = asyncHandler( async (req, res) => {
    const {email, password} = req.body;

    if(!email){
        throw new ApiError(400, "Email is required")
    }
    if(!password){
        throw new ApiError(400, "Password is required")
    }

    const  user = await User.findOne({email})
    if(!user){
        throw new ApiError(409, "Invalid email")
    }

    const isPasswordValid = await user.isPasswordCorrect(password)

    if(!isPasswordValid){
        throw new ApiError(409, "Invalid password");
    }

    const {accessToken, refreshToken} = await generateAccessAndRefreshToken(user._id)

    const loggedInUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!loggedInUser){
        throw new ApiError(500, "something went wrong while logging in the user")
    }

    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
    }

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json( new ApiResponse(200, {loggedInUser, accessToken, refreshToken}, "User logged in successfully"))
        
        

})

const logoutUser = asyncHandler ( async (req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: null
            }
        },
        {new: true}
    )

    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production"
    }

    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json( new ApiResponse(200, {}, "User logged out successfully"))
})

const refreshAccessToken = asyncHandler( async (req, res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

    if(!incomingRefreshToken) {
        throw new ApiError(401, "Refresh token is required")
    }

    try {
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        )
        const user = await User.findById(decodedToken?._id)
        
        if(!user) {
            throw new ApiError(401, "Invalid refresh token")
        }
        
        if (incomingRefreshToken !== user.refreshToken) {
          throw new ApiError(401, "Invalid refresh token");
        }

        const options = {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production"
        }

        const {accessToken, refreshToken: newRefreshToken} = 
        await generateAccessAndRefreshToken(user._id)

        return res
            .status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", newRefreshToken, options)
            .json( new ApiResponse(200, {accessToken, refreshToken: newRefreshToken}, "Access token refreshed successfully"))

    } catch (error) {
        throw new ApiError(500, "Something went wrong while refreshing access token")
    }
})

const getCurrentUser = asyncHandler ( async (req, res) => {
    return res.status(200)
        .json( new ApiResponse(200, req.user, "Current user details"))
})


export {
    registerUser,
    loginUser,
    refreshAccessToken,
    logoutUser,
    getCurrentUser
}