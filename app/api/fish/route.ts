import { connectDB } from "@/app/lib/dbConnect";
import { Fish } from "@/app/models/Fish";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    
    // ดึงข้อมูลปลาทั้งหมดจากฐานข้อมูล
    const fishes = (await Fish.find({}).sort({ createdAt: -1 })).map(fish => ({
      id: fish._id.toString(),
      name: fish.name,
      species: fish.species,
      price: fish.price,
      description: fish.description,
      image: fish.image,
      createdAt: fish.createdAt,
      updatedAt: fish.updatedAt,
    }));
    
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