import mongoose from "mongoose";

const neeSchema = mongoose.Schema({
  neename: {
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
  flag: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("Consignee", neeSchema);
