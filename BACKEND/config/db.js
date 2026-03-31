const mongoose = require('mongoose');
const connectDB = async () => {
  const mongoUrl = process.env.MONGO_URL;
  await mongoose.connect(mongoUrl);
  console.log('---mongodb is connected---');
};

module.exports = connectDB;
console.log("db.js");
