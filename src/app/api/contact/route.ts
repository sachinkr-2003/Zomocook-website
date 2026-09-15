import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongoose';
import Lead from '@/models/Lead';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, sourceType, sourceUrl } = body;

    // Basic Validation
    if (!name || !phone || !email) {
      return NextResponse.json(
        { success: false, message: 'Name, Phone, and Email are required fields.' },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectToDatabase();

    // Create a new lead record
    const newLead = await Lead.create({
      name,
      phone,
      email,
      sourceType: sourceType || 'General Contact',
      sourceUrl: sourceUrl || 'Unknown',
    });

    // In the future, Nodemailer logic can be triggered here to send emails.

    return NextResponse.json(
      { success: true, message: 'Your requirement has been submitted successfully!', data: newLead },
      { status: 201 }
    );
    
  } catch (error: any) {
    console.error('API Contact Error:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again later.', error: error.message },
      { status: 500 }
    );
  }
}
