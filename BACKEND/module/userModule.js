const mongoose =require('mongoose');
const useSC=mongoose.Schema({
  name:String,
  age:Number,
  email:String
})
module.exports=mongoose.model("us",useSC);
console.log("module");

