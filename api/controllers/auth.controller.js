// import User from "../models/user.model.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken"; // assuming you use JWT for authentication



// // Custom error function
// const throwError = (statusCode, message) => {
//     const error = new Error(message);
//     error.statusCode = statusCode;
//     return error;
//   };
// // Signin function
// export const signin = async (req, res, next) => {
//     const { email, userPassword } = req.body;
//     try {
//         const validUser = await User.findOne({ email });
//         if (!validUser) return next(throwError(404, "Wrong Credentials!"));
        
//         const isValidPassword = bcrypt.compareSync(userPassword, validUser.password);
//         if (!isValidPassword) return next(throwError(401, "Wrong Credentials!"));

//         // Extracting relevant user data
//         const { password, ...rest } = validUser._doc; // Assuming validUser._doc contains the user data
//         const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, { expiresIn: "720h" });
        
//         res.cookie("access_token", token, { httpOnly: true, secure: true })
//             .status(200)
//             .json(rest); // Send user data excluding the password
//     } catch (error) {
//         console.log(error);
//         next(error);
//     }
// };



// // Signout function
// export const signOut = (req, res) => {
//   res.clearCookie("access_token");
//   res.status(200).json({ success: true, message: "Signed out successfully" });
// };
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Custom error function
const throwError = (statusCode, message) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
};

// Signin function
const signin = async (req, res, next) => {
  const { email, userPassword } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(throwError(404, "Wrong Credentials!"));

    const isValidPassword = bcrypt.compareSync(userPassword, validUser.password);
    if (!isValidPassword) return next(throwError(401, "Wrong Credentials!"));

    // Extracting relevant user data
    const { password, ...rest } = validUser._doc;
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, { expiresIn: "720h" });

    res.cookie("access_token", token, { httpOnly: true, secure: true })
      .status(200)
      .json(rest);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Signout function
const signOut = (req, res) => {
  res.clearCookie("access_token");
  res.status(200).json({ success: true, message: "Signed out successfully" });
};

// Export des fonctions
module.exports = {
  signin,
  signOut
};
