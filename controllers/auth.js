import Users from "../models/users.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new Users({
      name: req.body.name,
      username: req.body.username,
      role: req.body.role,
      age: req.body.age,
      email: req.body.email,
      avatar: req.body.avatar,
      mobile: req.body.mobile,
      address: req.body.address,
      password: hash,
    });
    await newUser.save();
    res.status(200).send("User created successfully");
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  // const JWT_SECRET = 'jwt_secret_key';
  const JWT_VALIDITY = "1h";
  try {
    const users = await Users.findOne({ username: req.body.username });
    if (!users) return next(createError(404, "User not found"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      users.password
    );
    if (!isPasswordCorrect) return next(createError(400, "Wrong password"));

    const accessToken = jwt.sign({ userId: users._id }, process.env.JWT, {
      expiresIn: JWT_VALIDITY,
    });

    const { password, ...user } = users._doc;
    // res.status(200).send({ accessToken, user });
    res
      .cookie("access_token", accessToken, {
        httpOnly: true,
      })
      .status(200)
      .send({ accessToken, user });
  } catch (error) {
    next(error);
  }
};

export const getUserInfo = async (req, res, next) => {
  try {
    const users = await Users.findOne({ _id: req.body._id });
    const { password, ...user } = users._doc;
    res.status(200).send({ user });
  } catch (error) {
    next(res.status(400).send(error));
  }
};
