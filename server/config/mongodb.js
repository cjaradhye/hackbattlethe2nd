import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
async function configDB() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Connected to db");
  } catch (err) {
    console.log(err);
  }
}

export default configDB;
