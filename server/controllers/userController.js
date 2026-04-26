import { User } from "../models/User.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import validateEmail from "../helpers/validateEmail.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import generateAccessAndRefreshTokens from "../helpers/generateAccessAndRefreshTokens.js";
import { Resume } from "../models/Resume.js";


const registerUser = asyncHandler(async (req, res) => {
  //get user details from frontend
  //validation - not empty
  //check if user already exists: username, email
  //create user object - create entry in db
  //remove password and refresh token field from response
  //check for user creation
  //send success response

  try {
    const {  username, email, password, confirmPassword } = req.body;


    if (
      
      !username?.trim() ||
      !email?.trim() |
      !password?.trim() ||
      !confirmPassword?.trim()

    ) {
      throw new ApiError(400, "All fields are required");
    }

    if(!validateEmail(email)){
      throw new ApiError(400, "Invalid Email")
    }

    
    if(confirmPassword !== password){
      throw new ApiError(400, "Confirm Password and Password is not matching");
    }


    const existedUser = await User.findOne({
      $or: [{ username }, { email }],
    });
    if (existedUser) {
      throw new ApiError(
        409,
        "User with given username or email already exists"
      );
    }

    const user = await User.create({
      username: username.toLowerCase(),
      email,
      password,
    });
    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    if (!createdUser) {
      throw new ApiError(500, "Could not create user. Please try again");
    }

    return res
      .status(201)
      .json(new ApiResponse(201, createdUser, "User registered successfully"));
  } catch (error) {
    console.error("Error in user registration:", error);
    throw error;

  }

});

const loginUser = asyncHandler(async (req, res) => {
  //req body -> data from frontend
  //username or email
  //find the user
  //password check
  //generate access token and refresh token
  //send cookies
  //send success response
  const { email,  password } = req.body;
  
  if (!username && !email) {
    throw new ApiError(400, "Username or email is required");
  }
  const user = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (!user) {
    throw new ApiError(404, "User not found");
  }
  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid password");
  }
  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );
  
  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  
  const options = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .cookie("refreshToken", refreshToken, options)
    .cookie("accessToken", accessToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User logged in successfully"
      )
    );
});

const logoutUser = asyncHandler (
  async (req, res) => {
    //get refresh token from cookies
    //if not present, throw error
    //find the user with refresh token
    //if not found, throw error
    //remove refresh token from db
    //clear cookies
    //send success response
    await User.findByIdAndUpdate(
      req.user._id,
      {
        $unset: { 
          refreshToken: 1
        }
      },
      {
        new: true
      }
    ) 
    const options = {
      httpOnly: true,
      secure: true,
    }
    return res
      .status(200)
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .json(new ApiResponse(200, null, "User logged out successfully"));

  }
);

const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken 

  if(!incomingRefreshToken){
    throw new ApiError(401, "unauthorized request")
  }

 try {
   const decodedToken = jwt.verify(
     incomingRefreshToken,
     process.env.REFRESH_TOKEN_SECRET
   )
 
   const user = await User.findById(decodedToken?._id)
 
   if(!user){
     throw new ApiError(401, "Invalid Refresh token")
   }
 
   if(incomingRefreshToken !== user?.refreshToken){
     throw new ApiError(401, "Refresh token is expired or used")
   }
 
   const options = {
     httpOnly: true,
     secure: true
   }
 
   const {accessToken, newRefreshToken} = await generateAccessAndRefreshTokens(user._id)
 
   return res
   .status(200)
   .cookie("accessToken", accessToken, options)
   .cookie("refreshToken", newRefreshToken, options)
   .json(
     new ApiResponse(
       200,
       {accessToken, refreshToken:newRefreshToken},
       "Access token refreshed"
     )
   )
 } catch (error) {
    throw new ApiError(401, error?.message ||
      "Invalid refresh token"
    )
 }
}
)

const getUserById = async (req, res) => {
  try{
    const userId = req.user._id;

    const user = await User.findById(user._id)
    if(!user){
      return res.status(404).json(
        {
          message: 'User not found'
        }
      )
    }
    user.password  = undefined;
    return res.status(200).json({user})

  }
  catch(error){
    return res.status(400).json(
      {
        message: error.message
      }
    )
  }
}

const getUserResumes = async(req, res) => {
  try{
    const userId = req.userId;
    const resumes = await Resume.find({userId})
    return res.status(200).json({resumes})
  }
  catch(error){
    return res.status(400).json({message: error.message})
  }
}

export default 
{
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  getUserById,
  getUserResumes,
}
