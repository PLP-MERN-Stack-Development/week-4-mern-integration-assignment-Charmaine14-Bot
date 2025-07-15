import express from "express";
import {
  getCategories,
  createCategory,
  deleteCategory,
} from "../controllers/categoryController";
import auth from "../middleware/auth";

const router = express.Router();

router.get("/", getCategories);
router.post("/", auth, createCategory);
router.delete("/:id", auth, deleteCategory);

export default router;
