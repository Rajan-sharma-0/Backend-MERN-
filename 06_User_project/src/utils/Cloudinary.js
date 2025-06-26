import { v2 as cloudinary } from 'cloudinary';
import { log } from 'console';
import fs from 'fs';


    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDNARY_CLOUD_NAME, 
        api_key: process.env.CLOUDNARY_API_KEY, 
        api_secret: process.env.CLOUDNARY_API_SECRET
    });
    
    const uploadonClouninary = async ( localFilePath)=>{
        try{
            if(!localFilePath) return null;
            const response = await cloudinary.uploader.upload(localFilePath, {
                resource_type: 'auto',
            })
            console.log("File is successfully uploaded on coudnary", response.url);
            return  
            
        } catch(error){
            fs.unlinkSync(localFilePath); // Remove the locally saved temporary file as the  upload operation got  failed
            return null;
        }
    }

export { uploadonClouninary };