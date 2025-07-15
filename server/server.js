import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/database";
import postRoutes from "./routes/posts";
import categoryRoutes from "./routes/categories";
import authRoutes from "./routes/auth";
import commentRoutes from "./routes/comments";
import { notFound, errorHandler } from "./middleware/errorHandler";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/posts", postRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/comments", commentRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
