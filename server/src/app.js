import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import configDB from "../config/mongodb.js";
// import loginRouter from "../routes/login.js";
const app = express();
dotenv.config();
const port = 5500;
configDB();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5173",
      "http://20.197.4.190",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept", "Origin"],
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", loginRouter);
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
