import express from "express";
import {
  getComments,
  createComment,
  deleteComment,
} from "../controllers/commentController";
import auth from "../middleware/auth";

const router = express.Router();

router.get("/:postId", getComments);
router.post("/:postId", auth, createComment);
router.delete("/:id", auth, deleteComment);

export default router;
