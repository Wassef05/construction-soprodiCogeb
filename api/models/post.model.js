// import mongoose from "mongoose";

// const ImageSchema = new mongoose.Schema({
//   url: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//   },
// });

// const PostSchema = new mongoose.Schema(
//   {
//     title: {
//       required: true,
//       type: String,
//     },
//     description: {
//       required: true,
//       type: String,
//     },
//     SuperficieTotal: {
//       required: false,
//       type: Number,
//     },
//     SuperficieCouverte: {
//       type: Number,
//     },
//     NbrEntree: {
//       type: Number,
//     },
//     parking: {
//       type: Number,
//     },
//     NbrBureau: {
//       type: Number,
//     },
//     SuperficieBureau: {
//       type: Number,
//     },
//     Surveillance: {
//       type: Number,
//     },
//     images: {
//       type: [ImageSchema],
//       required: true,
//     },
//     NbrAtelier: {
//       type: Number,
//     },
//     SuperficieAtelier: {
//       type: Number,
//     },
//     FinDuBaille: {
//       type: Number,
//     },
//     Adresse: {
//       type: String,
//       required: false,
//     },
//   },
//   { timestamps: true }
// );

// const Post = mongoose.model("Post", PostSchema);

// export default Post;
const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

const PostSchema = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    SuperficieTotal: {
      required: false,
      type: Number,
    },
    SuperficieCouverte: {
      type: Number,
    },
    NbrEntree: {
      type: Number,
    },
    parking: {
      type: Number,
    },
    NbrBureau: {
      type: Number,
    },
    SuperficieBureau: {
      type: Number,
    },
    Surveillance: {
      type: Number,
    },
    images: {
      type: [ImageSchema],
      required: true,
    },
    NbrAtelier: {
      type: Number,
    },
    SuperficieAtelier: {
      type: Number,
    },
    FinDuBaille: {
      type: Number,
    },
    Adresse: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post; // Export du modèle
