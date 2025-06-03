/*
id string pk 
username string
email string
fullName string
avatar string
coverImage string
watchHistory ObjectId[] videos 
password string
refreshToken string
createdAt Date
updatedAt Date

*/
import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  fullname: {
    type: String,
    required: true,
    trim: true,
    index: true,
  },
  avatar: {
    type: String, //cloudinary url
    required: true,
  },
  coverImage: {
    type: String, // cloudinary url
  },
  watchHistory: [
    {
        type: Schema.Types.ObjectId, //watch history array of object id from the videos
        ref: "Video"
    }
  ],
  password:{
    type:String,
    required: [true, "password is required"]
  },
  refreshToken:{
    type:String
  }
},
    { timestamps: true}
    );
export const User= mongoose.model("User", userSchema)
// the whole idea is in the mongoDb mongoose is going to add a document with this structure.If it doesn't exist it is going to create that and while creatig willuse mongoose feature

// mongoose will build a model a new document named user and the  structure my database is gonna follow will refer to userSchema

// also i can export all features of mongoose like query,finding etc.