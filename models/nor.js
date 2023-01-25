import mongoose from "mongoose";

const norSchema = mongoose.Schema({
  norname: {
    type: String,
    required: true,
    unique: true,
  },
  scode: {
    type: String,
    // required: true,
    unique: true,
  },
  email: {
    type: String,
    // required: true,
    unique: true,
  },
  mobile: {
    type: Number,
    // required: true,
  },
  pincode: {
    type: Number,
    // required: true,
  },
  gstin: {
    type: String,
    // required: true,
  },
  city: {
    type: String,
    // default: "SA",
  },
  mop: {
    type: String,
  },
  flag: {
    type: Number,
    default:0,
  }
});

export default mongoose.model("Consignor", norSchema);
