import { Request } from "express";

interface AuthForm {
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

interface AuthRequestSignature extends Request {
  userID: string;
}

export { AuthForm, AuthRequestSignature };
