
// import express from "express";
// import mongoose from "mongoose";
// import 'dotenv/config';
// import postRouter from "./routes/post.route.js";
// import userRouter from "./routes/user.route.js";
// import authRouter from "./routes/auth.route.js";

// import cors from "cors";
// import cookieParser from "cookie-parser";
// import path from "path";
// import http from "http";

// const app = express();
// app.use(express.json());

// app.use(cookieParser());
// app.use(cors({
//   origin: process.env.NODE_ENV === "local" ? "http://localhost:5173" : "*",
//   credentials: true,
// }));

// const expressServer = http.createServer(app);
// const PORT = process.env.PORT || 4000;

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

// // Deployment settings
// const __dirname = path.resolve();
// if (process.env.NODE_ENV === "production") {
//   const staticFilesPath = path.join(__dirname, "..","client", "dist");
//   app.use(express.static(staticFilesPath));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(staticFilesPath, "index.html"));
//   });
// } else {
//   app.get("/", (req, res) => {
//     res.send("API listing...");
//   });
// }

// // Error handling middleware
// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || 500;
//   const message = err.message || "Internal Server Error";
//   res.status(statusCode).json({ success: false, statusCode, message });
// });

// // Start server
// expressServer.listen(PORT, () => {
//   console.log(`Server running at port ${PORT}`);
// });

// export default () => expressServer;
import express from "express";
import mongoose from "mongoose";
import 'dotenv/config';
import postRouter from "../routes/post.route.js";
import userRouter from "../routes/user.route.js";
import authRouter from "../routes/auth.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import serverless from "serverless-http";  // Assurez-vous que serverless-http est bien importé

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.NODE_ENV === "local" ? "http://localhost:5173" : "*",
    credentials: true,
}));

// Connect to the database
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
    throw new Error('MONGO_URI environment variable is not defined');
}

mongoose.connect(mongoUri)
    .then(() => console.log("Database connected"))
    .catch(err => console.log(err));

// Routes
// app.use("/soprodi/posts", postRouter);  
app.use("/soprodi/users", userRouter);
app.use("/soprodi/auth", authRouter);

app.use("/soprodi/posts", (req, res, next) => {
  console.log("Posts route hit", req.method);
  next();
}, postRouter);
// Pour le déploiement AWS Lambda
export const handler = serverless(app);
