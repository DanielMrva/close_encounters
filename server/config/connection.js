const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/close_encounters_DB",
  {
    //   removed items in here because of npm start error
  }
);

module.exports = mongoose.connection;
