import { JwtPayload } from "jsonwebtoken";

export interface TokenPayload extends JwtPayload {
  email: string;
  userId: string;
}

export interface EmailTokenPayload extends JwtPayload {
  email: string;
}

export interface PasswordChangeTokenPayload extends JwtPayload {
  userId: string;
}