import multer from "multer";
import cloudinary from "../config/cloudinary";

const storage = multer.memoryStorage();
const upload = multer({ storage });

export const uploadImage = upload.single("image");

export const processImage = async (req, res, next) => {
  if (!req.file) return next();
  try {
    const result = await cloudinary.uploader
      .upload_stream(
        {
          resource_type: "auto",
          folder: "tech-connect-blog",
        },
        (error, result) => {
          if (error) throw error;
          req.imageUrl = result.secure_url;
          next();
        }
      )
      .end(req.file.buffer);
  } catch (err) {
    next(err);
  }
};
