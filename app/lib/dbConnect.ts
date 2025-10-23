// lib/mongodb.ts
import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("⚠️ Please define the MONGODB_URI environment variable in .env.local");
}

interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// ขยาย type ของ global ให้รองรับ mongoose cache
const globalForMongoose = globalThis as unknown as { mongoose?: MongooseCache };

const cached = globalForMongoose.mongoose || {
  conn: null,
  promise: null,
};

export async function connectDB(): Promise<Mongoose> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, { dbName: "fishtopia" });
  }

  cached.conn = await cached.promise;
  globalForMongoose.mongoose = cached;
  return cached.conn;
}
