import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";

const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const createPost = async (req, res) => {
  const post = req.body;
  const newpost = new PostMessage(post);
  try {
    await newpost.save();
    res.status(201).json(newpost);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    res.status(404).send("No post with that id");

  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    { new: true }
  );
  res.json(updatedPost);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).send("No post with that id");

  await PostMessage.findByIdAndRemove(id);
  res.json({ message: "Post deleted!" });
};

const likePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).send("No post with that id");
  const post = await PostMessage.findById(id);
  const updatedPost = await PostMessage.findByIdAndUpdate(
    id,
    { likeCount: post.likeCount + 1 },
    { new: true }
  );
  res.json(updatedPost);
};
export { likePost, getPosts, createPost, updatePost, deletePost };
