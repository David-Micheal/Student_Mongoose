import mongoose from "mongoose";

const URI: string = "mongodb://localhost/studentDB";

mongoose.connect(URI);
mongoose.connection
  .on("open", () => {
    console.log("Data-Base Connected");
  })
  .once("error", (error) => {
    console.log(`Failed to Connect \n ${error}`);
  });
