import app from "./app.js";
import cloudinary from "cloudinary";
import { config } from "dotenv";
config({ path: "Backend/config/config.env" });
import Razorpay from "razorpay";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})
app.listen(process.env.PORT, ()=> {
  console.log(`Server listening on port ${process.env.PORT}`);
});

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});
