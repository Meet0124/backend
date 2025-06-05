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
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

//just before saving password we need to encrypt them
userSchema.pre("save", async function (next){
  if(!this.modified("password")) return next()

  this.password= bcrypt.hash(this.password, 10) // it will run every single time even for username which we don't want so we use if statement
  // password should only be updated at time of save or at time of updating password
  //but it will every time for save
  next()
})

// now to check whether userpassword matches 
userSchema.methods.isPasswordCorrect = async function(password) {
  return await bcrypt.compare(password, this.password)
}
// whenever user login we want to create access and refresh token

userSchema.methods.generateAccessToken = function(){
  // short lived access token
   return jwt.sign({
    _id: this._id,
    email:this.email,
    username: this.username,
    fullname: this.fullname
  },
  process.env.ACCESS_TOKEN_SECRET,
  {expiresIn: process.env.ACCESS_TOKEN_EXPIRY});
}

userSchema.methods.generateRefreshToken = function () {
  // short lived access token
  return jwt.sign(
    {
      _id: this._id,

    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
  );
};

export const User= mongoose.model("User", userSchema)
// the whole idea is in the mongoDb mongoose is going to add a document with this structure.If it doesn't exist it is going to create that and while creatig willuse mongoose feature

// mongoose will build a model a new document named user and the  structure my database is gonna follow will refer to userSchema

// also i can export all features of mongoose like query,finding etc.