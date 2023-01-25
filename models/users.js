import mongoose from "mongoose";

const registeruserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    // unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: [true, "Username Already Taken"]
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: {
    type: String,
    // default:"/assets/images/profile-preview.png"
  },
  password: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    // required: true,
  },
  role: {
    type: String,
    default: "SA",
  },
  age: {
    type: Number,
  },
  isAdmin:{
    type:Boolean,
    default:true
  }
});

export default mongoose.model("User", registeruserSchema);
