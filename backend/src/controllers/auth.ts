import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { AuthForm } from "../@types/auth";
import User from "../models/User";
import { ENV_VARS } from "..";

const signin = async (req: Request, res: Response) => {
  const { username, password }: AuthForm = req.body;

  try {
    const thisUser = await User.findOne({ username });

    if (!thisUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const passwordCorrect = await bcrypt.compare(password, thisUser.password);

    if (!passwordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { username: thisUser.username, id: thisUser._id },
      ENV_VARS.jwtSecret,
      { expiresIn: ENV_VARS.jwtExpiryDuration }
    );

    res.status(200).json({ result: thisUser, token });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

const signup = async (req: Request, res: Response) => {
  const { firstName, lastName, username, password, confirmPassword }: AuthForm =
    req.body;

  try {
    const thisUser = await User.findOne({ username });

    if (thisUser)
      return res.status(400).json({ message: "User already exists" });

    if (password !== confirmPassword)
      return res.status(400).json({ message: "Passwords do not match" });

    const hashedPassword = await bcrypt.hash(
      password,
      ENV_VARS.bcryptSaltRounds
    );

    const result = await User.create({
      firstName,
      lastName,
      username,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { username: result.username, id: result._id },
      ENV_VARS.jwtSecret,
      { expiresIn: ENV_VARS.jwtExpiryDuration }
    );

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export { signin, signup };
