import mongoose from "mongoose";
const invCounter = mongoose.Schema({
 id:{
    type:String,
 },
 seq:{
    type:Number
 }
});
export default mongoose.model("Invcounter", invCounter);
