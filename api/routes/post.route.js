// // post.route.js
// import express from 'express';
// import { createPost, updatePost, deletePost, singlePost, getAllPosts, getNumberPosts } from '../controllers/post.controller.js';

// const router = express.Router();

// router.get("/count", getNumberPosts);
// router.post("/", createPost);
// router.put("/:id", updatePost);
// router.delete("/:id", deletePost);
// router.get("/:id", singlePost);
// router.get("/", getAllPosts);

// export default router;  // Assurez-vous d'utiliser `export default`
const express = require('express');
const { createPost, updatePost, deletePost, singlePost, getAllPosts, getNumberPosts } = require('../controllers/post.controller');

const router = express.Router();

router.get("/count", getNumberPosts);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.get("/:id", singlePost);
router.get("/", getAllPosts);

// Export du router
module.exports = router; // Utilisation de module.exports
