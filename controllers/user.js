import Users from "../models/users.js";

// UPDATE 
export const updateUsers = async (req, res, next) => {
  try {
    const updatedUsers = await Users.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUsers);
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
