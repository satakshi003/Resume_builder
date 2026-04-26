import { User } from "../models/User.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import validateEmail from "../helpers/validateEmail.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import generateAccessAndRefreshTokens from "../helpers/generateAccessAndRefreshTokens.js";
import { Resume } from "../models/Resume.js";

const createResume = async (req, res) => {
  try{
    const userId = req.userId;
    const {title} = req.body;

    const newResume = await Resume.create({
      userId,
      title
    })
    return res.status(201).json({
      message: 'Resume created successfully',
      resume: newResume
    })
  }
  catch(error){
    return res.status(400).json({message: error.message})
  }
}

const deleteResume = async (req, res) => {
  try{
    const userId = req.userId;
    const {resumeId} = req.params;

    await Resume.findOneAndDelete({
      userId,
      _id: resumeId
    })
    return res.status(200).json({
      message: 'Resume deleted successfully',
    })
  }
  catch(error){
    return res.status(400).json({message: error.message})
  }
}

const getResumeById = async (req, res) => {
  try{
    const userId = req.userId;
    const {resumeId} = req.params;

    const resume = await Resume.findOne({
      userId,
      _id: resumeId
    })
    if(!resume){
      return res.status(404).json({
        message: "Resume not found"
      })

    //Hide unnecessary/internal fields from frontend  
    resume.__v = undefined;
    resume.createdAt = undefined;
    resume.updatedAt = undefined;

    }
    return res.status(200).json({
      resume
    })
  }
  catch(error){
    return res.status(400).json({message: error.message})
  }
}



