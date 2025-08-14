import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config({});

cloudinary.config({
    cloud_name:'vyon6vtkg',
    api_key: 'public_yRW+UD3baHynPssRbp63RmoEdnY=',
    api_secret: 'private_WVXbD/r8KLsfb6SP1yBSXHS6HS8='
});
export default cloudinary;