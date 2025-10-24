// app/lib/authAction.ts
"use server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { User } from "@/app/models/User";
import { connectDB } from "./dbConnect";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";
const TOKEN_NAME = "auth-token";

export async function createToken(userId: string) {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "7d" });
}

export async function setAuthCookie(token: string) {
  (await cookies()).set(TOKEN_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
  });
}

export async function getAuthUser() {
  const token = (await cookies() ).get(TOKEN_NAME)?.value;
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
    await connectDB();
    const user = await User.findById(decoded.userId).select("-password");
    return user;
  } catch (error) {
    return null;
  }
}

export async function registerUser(
  username: string,
  email: string,
  password: string
) {
  await connectDB();

  // Check if user already exists
  const existingUser = await User.findOne({ $or: [{ email }, { username }] });
  if (existingUser) {
    throw new Error("User already exists with this email or username");
  }

  const user = new User({ username, email, password });
  await user.save();

  const token = await createToken(user._id.toString());
  return {
    user: { id: user._id.toString(), username: user.username, email: user.email },
    token,
  };
}

export async function loginUser(email: string, password: string) {
  await connectDB();

  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = await createToken(user._id.toString());
  return {
    user: { id: user._id.toString(), username: user.username, email: user.email },
    token,
  };
}

export async function logoutUser() {
   (await cookies()).delete(TOKEN_NAME);
}
