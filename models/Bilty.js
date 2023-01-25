import mongoose from "mongoose";
const biltySchema = mongoose.Schema({
  biltynumber: { type: Number, require: true },
  norname: {
    type: String,
    required: true,
  },
  altnormobile: {
    type: Number,
  },
  norcity: {
    type: String,
    required: true,
  },
  neename: {
    type: String,
    required: true,
  },
  co: {
    type: String,
  },
  altneemobile: {
    type: Number,
  },
  neecity: {
    type: String,
    required: true,
  },
  invno: {
    type: String,
  },
  invdate: {
    type: Date,
  },
  invamt: {
    type: String,
  },
  ewaybill: {
    type: String,
  },
  distance: {
    type: String,
  },
  mop: {
    type: String,
    required: true,
  },
  dloffice: {
    type: String,
  },
  goods: {
    type: Object,
    required: true,
  },
  frcharges: {
    type: Number,
    required: true,
  },
  hamali: {
    type: Number,
  },
  doccharges: {
    type: Number,
  },
  totalqty: {
    type: Number,
  },
  ddcharges: {
    type: Number,
  },
  othercharges: {
    type: Number,
  },
  // gst: {
  //   type: Number,
  // },
  totalfr: {
    type: Number,
    required: true,
  },
  remark: {
    type: String,
  },
  status: {
    type: String,
    default: "New",
  },
  user: {
    type: String,
    required: true,
  },
});
export default mongoose.model("Bilty", biltySchema);
