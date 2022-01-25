import express from "express";
const router = express.Router();
import {
  getPosts,
  createPost,
  updatePost,
  likePost,
  deletePost,
} from "../controllers/posts.js";

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);

export default router;
