const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const { throwError } = require("../utils/error");

const createUser = async (req, res, next) => {
  try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = await User.create({
          ...req.body,
          password: hashedPassword
      });
      res.status(201).json(user);
  } catch (error) {
      console.error("Error creating user:", error);
      next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return throwError(404, "User not found");
    
    const { password, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  const { email, username } = req.body;

  try {
    const currentUser = await User.findById(req.params.id);
    if (!currentUser) return next(throwError(404, "User not found"));

    if (email !== currentUser.email) {
      const checkEmail = await User.findOne({ email });
      if (checkEmail) return next(throwError(500, "Email already in use"));
    }

    if (username !== currentUser.username) {
      const checkUserName = await User.findOne({ username });
      if (checkUserName) return next(throwError(500, "Username already in use"));
    }

    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { username, password: req.body.password, email },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(throwError(500, error.message));
  }
};

const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.clearCookie("access_token");
    res.status(200).json("User Deleted Successfully!");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
