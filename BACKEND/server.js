const cors = require('cors');
const express = require('express');
const connectDB = require('./config/db.js');
const dotenv = require('dotenv');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Route
app.use("/api/user", require("./router/userRouter"));

const PORT = process.env.PORT || 5004;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});