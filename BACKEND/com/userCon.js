const Use=require("../module/userModule");
exports.createUser=async(req,resp)=>{
  const data= await Use.create(req.body);
  resp.status(200).json(data);
}
exports.getUser=async(req,resp)=>{
  const data=await Use.find();
  resp.json(data);
}
exports.getUserone=async(req,resp)=>{
  const data=await Use.findById(req.params.id);
  resp.json(data);
}
exports.updateUser=async(req,resp)=>{
  const data=await Use.findByIdAndUpdate(req.params.id,req.body,{new:true});
  resp.json(data);
}
exports.deleteUser=async(req,resp)=>{
  const data=await Use.findByIdAndDelete(req.params.id);
  resp.json({message:"User Deleted",data:data});
}
console.log("controller initialized");
