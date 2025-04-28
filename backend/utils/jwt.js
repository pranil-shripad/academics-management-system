import jwt from "jsonwebtoken";

export const signToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET || "yoursecretkey", { expiresIn: "1d" });
};
