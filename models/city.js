import mongoose from "mongoose";

const citySchema = mongoose.Schema({
  city: {
    type: String,
    required: true,
    unique: true,
  },
  pincode: {
    type: Number,
    // required: true,
    // unique: true,
  },
  taluka: {
    type: String,
    // required: true,
    // unique: true,
  },
  dist: {
    type: String,
    // required: true,
  },
 
});

export default mongoose.model("City", citySchema);
