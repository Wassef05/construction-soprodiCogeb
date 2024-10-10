const Post = require("../models/post.model");

// Custom error function
const throwError = (statusCode, message) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
};

//===== Create Post =====//
const createPost = async (req, res, next) => {
  try {
    // Validate and sanitize req.body if needed
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    console.error("Error creating post:", error);
    next(error);
  }
};

//======handle post Delete========//
const deletePost = async (req, res, next) => {
  const isPostExist = await Post.findById(req.params.id);

  if (!isPostExist) return next(throwError(404, "Post not found"));

  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json("Post deleted successfully");
  } catch (error) {
    next(error);
  }
};

//===== Handle Post Update ======//
const updatePost = async (req, res, next) => {
  const isPostExist = await Post.findById(req.params.id);
  if (!isPostExist) return next(throwError(404, "Post not found"));

  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (error) {
    next(error);
  }
};

//===== Get A Single Post ====//
const singlePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

//==== Get All Posts ====//
const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

//========= get posts number =========//
const getNumberPosts = async (req, res) => {
  try {
    const count = await Post.countDocuments();
    res.json({ count });
  } catch (error) {
    console.error('Erreur lors de la récupération du nombre de posts:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

// Export des fonctions
module.exports = {
  createPost,
  updatePost,
  deletePost,
  singlePost,
  getAllPosts,
  getNumberPosts
};
