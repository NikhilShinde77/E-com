const express=require('express');
const router=express.Router();
const {
  createUser,
  getUser,
  getUserone,
  updateUser,
  deleteUser
}=require("../com/userCon");

router.post("/create",createUser);
router.get("/get",getUser);
router.get("/get/:id",getUserone);
router.put("/update/:id",updateUser);
router.delete("/delete/:id",deleteUser);
module.exports=router;
console.log("router");
