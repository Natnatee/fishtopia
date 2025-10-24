// app/api/fish/route.ts
import { connectDB } from "@/app/lib/dbConnect";
import { Fish } from "@/app/models/Fish";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await connectDB();
    
    // ดึงข้อมูลปลาทั้งหมดจากฐานข้อมูล
    const fishes = await Fish.find({}).sort({ createdAt: -1 });
    
    return NextResponse.json({
      success: true,
      count: fishes.length,
      data: fishes
    });
    
  } catch (error) {
    console.error('Error fetching fish:', error);
    return NextResponse.json(
      { success: false, error: 'Server Error' },
      { status: 500 }
    );
  }
}