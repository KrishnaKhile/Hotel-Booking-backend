import Users from "../models/users.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";

// UPDATE
export const updateUsers = async (req, res, next) => {
  const profile = req.file ? req.file.filename : "profile-preview.png";
  // console.log(req.body,profile);
  try {
    const updatedUsers = await Users.findByIdAndUpdate(
      req.params.id,
      { $set: req.body, avatar: profile },
      { new: true }
    );
    res.status(200).json(updatedUsers);
  } catch (error) {
    next(error);
  }
};
// CHANGE PASSWORD
export const changePassword = async (req, res, next) => {
  try {
    const users = await Users.findOne({ _id: req.params.id});
    if (!users) return next(createError(404, "User not found"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      users.password
    );

    if (!isPasswordCorrect) return next(createError(400, "Old Password Not Match"));
// const renewpassword = req.body.renewpassword
// console.log(renewpassword);
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync(req.body.renewpassword, salt);
     await Users.findByIdAndUpdate(
      req.params.id,
      { $set: {password:hash} },
    );
    res.status(200).json("Password change Successfully");
  } catch (error) {
    next(error);
  }
};
// DELETE
export const deleteUsers = async (req, res, next) => {
  try {
    const deleteUsers = await Users.findByIdAndDelete(req.params.id);
    res.status(200).json("Users has been deleted");
  } catch (error) {
    next(error);
  }
};
// GET
export const getUsers = async (req, res, next) => {
  try {
    const getUser = await Users.findById(req.params.id);
    res.status(200).json(getUser);
  } catch (error) {
    next(error);
  }
};

// GET ALL
export const getAllUsers = async (req, res, next) => {
  try {
    const getAllUser = await Users.find();
    res.status(200).json(getAllUsers);
  } catch (error) {
    next(error);
  }
};
