const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

//@desc register a new user
//@route POST/api/users/register
//@ access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const userFound = await User.findOne({ email });
  if (userFound) {
    res.status(400);
    throw new Error("User already exists");
  }
  //hash password using bcrypt
  const hashedPwd = await bcrypt.hash(password, 10);
  console.log("hasedpassowrd :", hashedPwd);

  //create user
  const user = await User.create({
    username,
    email,
    password: hashedPwd,
  });

  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("user details are invalid");
  }
  res.status(200).json({ message: "user registered " });
});
//@desc log in user
//@route POST/api/users/login
//@ access public
//add an access token each time a user logs in
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }

  res.status(200).json({ message: " user logged in" });
});
//@desc get the current user
//@route GET/api/users/currentuser
//@ access public
const currentUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "current user" });
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
};
