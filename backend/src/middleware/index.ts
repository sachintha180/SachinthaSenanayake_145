import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken";

import { ENV_VARS } from "..";
import { JWTData } from "../@types/jwt";
import { AuthRequestSignature } from "../@types/auth";

const auth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    let decodedData: JWTData | undefined;

    if (token) {
      try {
        decodedData = jwt.verify(token, ENV_VARS.jwtSecret) as JWTData;
      } catch {
        return res.status(401).json({ message: "Invalid token" });
      }
      (req as AuthRequestSignature).userID = decodedData.id;
    }

    next();
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export { auth };
