const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/bookstore");

mongoose.connection.on("connected", () => {
  console.log("Connected to mongoDB");
});

mongoose.connection.on("error", (error) => {
  console.error("Connected to mongoDB", error);
});
module.exports = mongoose;
