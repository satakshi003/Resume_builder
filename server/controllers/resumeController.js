import { User } from "../models/User.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import validateEmail from "../helpers/validateEmail.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import generateAccessAndRefreshTokens from "../helpers/generateAccessAndRefreshTokens.js";
import { Resume } from "../models/Resume.js";
import imagekit from "../config/imagekit.js";
import fs from 'fs';

export const createResume = async (req, res) => {
  try{
    const userId = req.user._id;
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

export const deleteResume = async (req, res) => {
  try{
    const userId = req.user._id;
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

export const getResumeById = async (req, res) => {
  try{
    const userId = req.user._id;
    const {resumeId} = req.params;

    const resume = await Resume.findOne({
      userId,
      _id: resumeId
    })
    if(!resume){
      return res.status(404).json({
        message: "Resume not found"
      })
    }

    //Hide unnecessary/internal fields from frontend  
    resume.__v = undefined;
    resume.createdAt = undefined;
    resume.updatedAt = undefined;

    
    return res.status(200).json({
      resume
    })
  }
  catch(error){
    return res.status(400).json({message: error.message})
  }
}

export const getPublicResumeById = async (req, res) => {
  try{
    const {resumeId} = req.params;
    const resume = await Resume.findOne({public: true, _id: resumeId})

    if(!resume){
      return res.status(404).json({message: "Resume not found"})
    }
    return res.status(200).json({resume})
  }catch(error){
    return res.status(400).json({message: error.message})
  }
}

export const updateResume = async (req, res) => {
  try{
     const userId = req.user._id;
     const {resumeId, resumeData, removeBackground} = req.body
     const image = req.file;

     let resumeDataCopy;
     if(typeof (resumeData) === 'string'){
        resumeDataCopy = JSON.parse(resumeData); //Backend receives JSON as string → needs parsing
     }else{
      resumeDataCopy = structuredClone(resumeData)
     }
     if (resumeDataCopy.accent_color) {
      resumeDataCopy.theme_color = resumeDataCopy.accent_color;
      delete resumeDataCopy.accent_color;
    }


     if(image){

      const imageBufferData = fs.createReadStream(image.path)
      
        const uploadOptions = {
          file: imageBufferData,
          fileName: "resume.png",
          folder: "user-resumes",
        };

        const response = await imagekit.files.upload(uploadOptions);

        let finalImageUrl = response.url;
        
        if (removeBackground === 'yes' || removeBackground === true) {
            finalImageUrl += "?tr=w-800:e-bgremove:w-300,h-300,fo-face,z-0.75:f-png,q-100";
        } else {
            finalImageUrl += "?tr=w-300,h-300,fo-face,z-0.75:f-png,q-100";
        }

        resumeDataCopy.personal_info.image = finalImageUrl;

         fs.unlink(image.path, (err) => {
        if(err) console.error('Temp file cleanup failed', err)
      })
     } else if (resumeDataCopy.personal_info && typeof resumeDataCopy.personal_info.image === 'string' && resumeDataCopy.personal_info.image.includes('imagekit.io')) {
        let existingUrl = resumeDataCopy.personal_info.image.split('?')[0];
        
        if (removeBackground === 'yes' || removeBackground === true) {
            existingUrl += "?tr=w-800:e-bgremove:w-300,h-300,fo-face,z-0.75:f-png,q-100";
        } else {
            existingUrl += "?tr=w-300,h-300,fo-face,z-0.75:f-png,q-100";
        }
        
        resumeDataCopy.personal_info.image = existingUrl;
     }

     const resume = await Resume.findOneAndUpdate({userId, _id: resumeId}, resumeDataCopy, {new: true})

     return res.status(200).json({message: 'Saved successfully', resume})
  }
  catch(error){
    return res.status(400).json({message: error.message})
  }
}


