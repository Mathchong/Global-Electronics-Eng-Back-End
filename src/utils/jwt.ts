import jwt from "jsonwebtoken";
import "../config/dotenv";

export function generateToken(data: {}) {
  const key = process.env.JWT_SECRET;
  if (!key) throw {};
  return jwt.sign(data, key, { expiresIn: "2h" });
}

export function verifyToken(token: string) {
  const key = process.env.JWT_SECRET;
  if (!key) throw {};
  return jwt.verify(token, key);
}
