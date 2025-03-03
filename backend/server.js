import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import authRouter from "./routes/auth.routes.js";
import connectToDB from "./db/connectToMongo.js";

dotenv.config();
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouter);

app.listen(3000, () => {
  console.log("listening on 3000");
  connectToDB();
});
