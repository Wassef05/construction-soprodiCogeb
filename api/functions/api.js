// import express from "express";
// import mongoose from "mongoose";
// import 'dotenv/config';
// import postRouter from "../routes/post.route.js";
// import userRouter from "../routes/user.route.js";
// import authRouter from "../routes/auth.route.js";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import path from "path";
// import http from "http";
// import serverless from "serverless-http";  // Assurez-vous que serverless-http est bien importé

// const app = express();
// app.use(express.json());
// app.use(cookieParser());
// app.use(cors({
//   origin: process.env.NODE_ENV === "local" ? "http://localhost:5173" : "*",
//   credentials: true,
// }));

// // Connect to the database
// const mongoUri = process.env.MONGO_URI;
// if (!mongoUri) {
//   throw new Error('MONGO_URI environment variable is not defined');
// }

// mongoose.connect(mongoUri)
//   .then(() => console.log("Database connected"))
//   .catch(err => console.log(err));

// // Routes
// app.use("/soprodi/posts", postRouter);
// app.use("/soprodi/users", userRouter);
// app.use("/soprodi/auth", authRouter);

// // Pour le déploiement AWS Lambda
// export const handler = async (event, context) => {
//   const result = await serverless(app)(event, context);
//   return result;
// };

// // Pour le développement local
// const PORT = process.env.PORT || 4000;
//   const expressServer = http.createServer(app);
//   expressServer.listen(PORT, () => {
//     console.log(`Server running at port ${PORT}`);
//   });

// api.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const postRouter = require('../routes/post.route'); 
const userRouter = require('../routes/user.route');
const authRouter = require('../routes/auth.route');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const serverless = require('serverless-http');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.NODE_ENV === 'local' ? 'http://localhost:5173' : '*',
    credentials: true,
}));

const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
    throw new Error('MONGO_URI environment variable is not defined');
}

mongoose.connect(mongoUri)
    .then(() => console.log('Database connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api/soprodi/posts', postRouter);
app.use('/api/soprodi/users', userRouter);
app.use('/api/soprodi/auth', authRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({ success: false, statusCode, message });
});

// Export for Netlify
module.exports.handler = serverless(app);

// For local development
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
