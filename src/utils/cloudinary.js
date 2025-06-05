import { v2 as cloudinary } from "cloudinary";
import fs from "fs" //file storage method
// configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadonCloudinary = async(localFilePath) =>{
    try{
        if(!localFilePath) return null
        const response = await cloudinary.uploader.upload(
            localFilePath, {
                resouce_type: "auto"
            }
        )
        console.log("File uploaded on cloudinary. Filesrc: "+ response.url);
        // once file uploaded we would like ot delete from our server
        fs.unlinkSync(localFilePath)
        return response
        
    }catch(error){
        fs.unlinkSync(localFilePath)
        return null
    }
}
export {uploadonCloudinary}
