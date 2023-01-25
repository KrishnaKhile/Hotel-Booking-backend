import Quot from "../models/quot.js";



export const createQuot = async (req, res, next) => {
    try {
      const newQuot = await Quot.create(req.body);
      res.status(200).json(newQuot);
    } catch (error) {
      next(error);
    }
  };

  // // GET ALL
export const getQuot = async (req, res, next) => {
  try {
    const getAllQuot = await Quot.find();
    res.status(200).json(getAllQuot);
  } catch (error) {
    next(error);
  }
};


// UPDATE
export const updateQuot = async (req, res, next) => {
  const profile = req.body
  console.log(profile);
  try {
    const updatePromises = profile.map(e => {
      return Quot.updateOne(
         { _id: e._id },
         { $set: { rate: e.rate } }
      );
  });
  
  await Promise.all(updatePromises);
  res.status(200).json('All updates completed successfully');
   
  } catch (error) {
    next(error);
  }
};