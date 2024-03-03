import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth";
import recipeRoutes from "./routes/recipe";

const app = express();
dotenv.config();

// express middleware
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// establish routes
app.use("/auth", authRoutes);
app.use("/recipe", recipeRoutes)

const ENV_VARS = {
  mongoURL: process.env.MONGO_URL || "mongodb+srv://localhost",
  port: process.env.PORT || 5000,
  jwtSecret: process.env.JWT_SECRET || "test",
  jwtExpiryDuration: process.env.JWT_EXPIRY_DURATION || "1h",
  bcryptSaltRounds: parseInt(process.env.BCRYPT_SALT_ROUNDS || "12"),
};

const main = async () => {
  try {
    await mongoose.connect(ENV_VARS.mongoURL);
    app.listen(ENV_VARS.port, () => {
      console.log(`Server running on port: ${ENV_VARS.port}`);
    });
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

main();

export { ENV_VARS };
