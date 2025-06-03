/*
owner ObjectId users
videoFile string
thumbnail string
title string
description string
duration number
isPublished boolean
createdAt Date
updatedAt Date

*/

import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoScehma = new Schema({
  videoFile: {
    type: String, //cloudinary url
    required: true,
  },
  thumbnial: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    default:0,
  },
  duration: {
    type: Number,
    required: true,
  },
  isPublished:{
    type:Boolean,
    default:true
  },
  owner: {
    type:Schema.Types.ObjectId,
    ref:"User"
  }
},
    { timestamps : true}
 );
videoScehma.plugin(mongooseAggregatePaginate)

export const User= mongoose.model("User", userSchema)