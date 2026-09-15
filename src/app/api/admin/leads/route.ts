import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongoose';
import Lead from '@/models/Lead';

// This API fetches all leads from Database for Admin viewing
export async function GET(request: Request) {
  try {
    // 1. Connect to MongoDB
    await connectToDatabase();

    // 2. Fetch all leads from the last recent to oldest
    const leads = await Lead.find({}).sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      count: leads.length,
      data: leads
    }, { status: 200 });
    
  } catch (error: any) {
    console.error('API Admin Leads Error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch leads', error: error.message },
      { status: 500 }
    );
  }
}
