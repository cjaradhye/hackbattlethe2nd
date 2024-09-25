import mongoose, { Schema } from "mongoose";
const loginScchema = new Schema(
  {
    uid: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    photoURL: {
      type: String,
    },
  },
  { timestamps: true }
);

const login = mongoose.model("admin", loginScchema);
export default login;
