const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/inotebook";

const connectToMongo = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((e) => {
      console.log("not connected");
    });
};
module.exports = connectToMongo;
