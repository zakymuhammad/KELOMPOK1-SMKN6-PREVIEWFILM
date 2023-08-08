import express from "express";
import dotenv from "dotenv";
import db from "./config/Database.js";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";

import cors from "cors";

dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("Your db is Connected... 👌");
  // penting
  // await db.sync();
  // penting
} catch (error) {
  console.error(error);
}

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(7000, () => console.log("Server running at port 7000"));
