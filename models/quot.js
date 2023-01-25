import mongoose from "mongoose";

const quotSchema = mongoose.Schema({
  norname: {
    type: String,
    required: true,
  },
  norcity: {
    type: String,
    required: true,
  },
  neecity: {
    type: String,
    required: true,
  },
  mop: {
    type: String,
    required: true,
  },
  pkgtype: {
    type: String,
    required: true,
  },
  frtype: {
    type: String,
    required: true,
  },
  rate:{
    type:Number,
    required:true,
  }
  
});

export default mongoose.model("Quot", quotSchema);
