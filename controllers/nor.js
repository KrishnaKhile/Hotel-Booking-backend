import Consignor from "../models/nor.js";
import Consignee from "../models/nee.js";
import City from "../models/city.js";
import { createError } from "../utils/error.js";

//  Create Consignor
export const createNor = async (req, res, next) => {
  try {
    const newNor = await Consignor.create(req.body);
    res.status(200).json(newNor);
  } catch (error) {
    if (error && error.code === 11000) {
      return res.status(400).send({ message: 'Name, ShortCode, Email must be Unique!' });
    }
    next(error);
  }
};

// // GET ALL
export const consignor = async (req, res, next) => {
  try {
    const getAllNor = await Consignor.find();
    res.status(200).json(getAllNor);
  } catch (error) {
    next(error);
  }
};

// DELETE CONSIGNOR

export const deleteNor = async (req, res, next) => {
  const id= req.params.id
  try {
    const deleteNor = await Consignor.findByIdAndDelete({_id:id});
    if (!deleteNor) {
      res.status(404).json(`No Consignor found with id : ${id}`);
    } else {
      res.status(200).send(deleteNor);
    }
  } catch (error) {
    next(error);
  }
};

// UPDATE Consignor
export const updateNor = async (req, res, next) => {
  // const profile = req.file ? req.file.filename : "profile-preview.png";
  // console.log(req.body,profile);
  try {
    const updatedNor = await Consignor.findByIdAndUpdate(
      req.params.id,
      { $set: req.body},
      { new: true }
    );
    if (!updatedNor) {
      res.status(404).json(`No Consignor found with id : ${ req.params.id}`);
    } else {
      res.status(200).json(updatedNor);
    }
  } catch (error) {
    next(error);
  }
};


// CREATE CONSIGNEE
export const createNee = async (req, res, next) => {
  try {
    const newNor = await Consignee.create(req.body);
    // if (!newNor) return next(createError(500, "Name, Short Code and Email ID must be unique."));
    res.status(200).json(newNor);
  } catch (error) {
    res.status(500).json("Name, Short Code and Email ID must be unique.");
    next(error);
  }
};

// // GET ALL
export const consignee = async (req, res, next) => {
  try {
    const getAllNee = await Consignee.find();
    res.status(200).json(getAllNee);
  } catch (error) {
    next(error);
  }
};




// DELETE CONSIGNEE
export const deleteNee = async (req, res, next) => {
  const id= req.params.id
  try {
    const deleteNee = await Consignee.findByIdAndDelete({_id:id});
    if (!deleteNee) {
      res.status(404).json(`No Consignee found with id : ${id}`);
    } else {
      res.status(200).send(deleteNee);
    }
  } catch (error) {
    next(error);
  }
};


// UPDATE Consignee
export const updateNee = async (req, res, next) => {
  // const profile = req.file ? req.file.filename : "profile-preview.png";
  // console.log(req.body,profile);
  try {
    const updatedNee = await Consignee.findByIdAndUpdate(
      req.params.id,
      { $set: req.body},
      { new: true }
    );
    if (!updatedNee) {
      res.status(404).json(`No Consignor found with id : ${ req.params.id}`);
    } else {
      res.status(200).json(updatedNee);
    }
  } catch (error) {
    next(error);
  }
};





// city controller srart

// CREATE CONSIGNEE
export const createCity = async (req, res, next) => {
  try {
    const newNor = await City.create(req.body);
    res.status(200).json(newNor);
  } catch (error) {
    // res.status(500).json("Name, Short Code and Email ID must be unique.");
    next(error);
  }
};


// // GET ALL
export const city = async (req, res, next) => {
  try {
    const getAllNee = await City.find();
    res.status(200).json(getAllNee);
  } catch (error) {
    next(error);
  }
};



// DELETE City
export const deleteCity = async (req, res, next) => {
  const id= req.params.id
  try {
    const deleteCity = await City.findByIdAndDelete({_id:id});
    if (!deleteCity) {
      res.status(404).json(`No Consignee found with id : ${id}`);
    } else {
      res.status(200).send(deleteCity);
    }
  } catch (error) {
    next(error);
  }
};


// UPDATE City
export const updateCity = async (req, res, next) => {
  // const profile = req.file ? req.file.filename : "profile-preview.png";
  // console.log(req.body,profile);
  try {
    const updatedCity = await City.findByIdAndUpdate(
      req.params.id,
      { $set: req.body},
      { new: true }
    );
    if (!updatedCity) {
      res.status(404).json(`No City found with id : ${ req.params.id}`);
    } else {
      res.status(200).json(updatedCity);
    }
  } catch (error) {
    next(error);
  }
};