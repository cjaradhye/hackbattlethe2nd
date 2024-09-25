import express from "express";
const routerLogin = express.Router();

import verifyToken from "../middleware/verifyToken.js";

routerLogin.post("/signup", verifyToken, async (req, res) => {
  const { uid, email, name, picture } = req.user;
  if (!uid) {
    return res.status(400).send("Invalid user ID");
  }

  try {
    let user = await webadmin.findOne({ uid });
    if (!user) {
      user = new webadmin({ uid, email, name, photoURL: picture });
      await user.save();
      return res.status(201).send("Signed UP");
    }
    return res.status(403).send("User already exists");
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
});

routerLogin.post("/login", verifyToken, async (req, res) => {
  const { uid, email, name, picture } = req.user;
  if (!uid) {
    return res.status(400).send("Invalid user ID");
  }
  try {
    let user = await webadmin.findOne({ uid });

    if (!user) {
      return res.status(404).send("User Not Found");
    } else {
      const token = jwt.sign(user.toObject(), process.env.SECRET_KEY, {
        expiresIn: "2d",
      });
      return res.status(200).send(token);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
});

export default routerLogin;
