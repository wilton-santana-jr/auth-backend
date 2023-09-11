// external imports
const mongoose = require("mongoose");
require('dotenv').config()

async function dbConnect() {
  // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
  //process.env.DB_URL,
  //'mongodb+srv://plenny:FXrdLJQza5itisRf@cluster0.xzvxqwa.mongodb.net/authDB?retryWrites=true&w=majority'
  mongoose
    .connect(
        process.env.DB_URL,
      {
        //   these are options to ensure that the connection is done properly
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    )
    .then(() => {
      console.log("Successfully connected to MongoDB Atlas!");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB Atlas!");
      console.error(error);
    });
}

module.exports = dbConnect;
