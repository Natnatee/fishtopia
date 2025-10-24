// app/api/test/route.ts
import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/dbConnect";
import { Fish } from "@/app/models/Fish";

export async function GET() {
  await connectDB();

  // สร้างข้อมูลทดสอบ
  const fish = await Fish.create({
    name: "ปลาปู",
    species: "Pangasianodonodon",
    size: 5,
    price: 20,
  });

  return NextResponse.json({
    message: "Fish created successfully",
    data: fish,
  });
}
