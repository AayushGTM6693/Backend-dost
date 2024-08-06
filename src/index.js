// It loads environment variables using dotenv,
//connects to the database, and starts the Express server.
import express from "express";
const app = express();

//require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";

import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  // set up event listeners
  .then(() => {
    app.on("error", (error) => {
      console.log("ERROR !!!    ", error);
      throw error;
    });

    // listen incomming request on express server
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed", err);
  });

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("error", error);
//       throw error;
//     });
//     app.listen(3000, () => {
//       console.log(`app is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("ERROR", error);
//     throw error;
//   }
// })();
