import express from "express";
import {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  searchPosts,
} from "../controllers/postController";
import auth from "../middleware/auth";
import { validatePost } from "../middleware/validation";
import { uploadImage, processImage } from "../middleware/upload";

const router = express.Router();

router.get("/", getPosts);
router.get("/search", searchPosts);
router.get("/:id", getPostById);
router.post("/", auth, uploadImage, processImage, validatePost, createPost);
router.put("/:id", auth, uploadImage, processImage, validatePost, updatePost);
router.delete("/:id", auth, deletePost);

export default router;
