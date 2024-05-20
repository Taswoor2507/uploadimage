import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs'
          
 cloudinary.config({ 
        cloud_name: "dxwpeho6w", 
        api_key: "676929113492557", 
        api_secret: "Xc5LEKvv-IhT1qLDU5wuyBUSXig"
      });

      const uploadOnCloudinary = async (localFilePath) => {
        try {
            if (!localFilePath) return null
            //upload the file on cloudinary
            const response = await cloudinary.uploader.upload(localFilePath, {
                resource_type: "auto"
            })
            // file has been uploaded successfull
            console.log("file is uploaded on cloudinary ", response.url);
            fs.unlinkSync(localFilePath)
            return response;
    
        } catch (error) {
            console.log("error in upload filed cloudinary" , error);
            fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
            return null;
        }
    }
    
    
    
    export {uploadOnCloudinary}