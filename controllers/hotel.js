import Hotels from "../models/hotels.js";

// CREATE 
export const createHotel = async (req, res, next) => {
  const newHotel = new Hotels(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};
// UPDATE 
export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotels.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    next(error);
  }
};
// DELETE 
export const deleteHotel = async (req, res, next) => {
  try {
    const deleteHotel = await Hotels.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted");
  } catch (error) {
    next(error);
  }
};
// GET 
export const getHotel = async (req, res, next) => {
  try {
    const getHotel = await Hotels.findById(req.params.id);
    res.status(200).json(getHotel);
  } catch (error) {
    next(error);
  }
};

// GET ALL 
export const getAllHotel = async (req, res, next) => {
  try {
    const getAllHotel = await Hotels.find();
    res.status(200).json(getAllHotel);
  } catch (error) {
    next(error);
  }
};
