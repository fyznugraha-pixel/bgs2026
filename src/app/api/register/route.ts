import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, city, date } = body;

    // Validate
    if (!name || !email || !city || !date) {
      return NextResponse.json(
        { error: 'Semua field wajib diisi' },
        { status: 400 }
      );
    }

    // Save to database
    const registration = await prisma.registration.create({
      data: {
        name,
        email,
        city,
        date,
      },
    });

    return NextResponse.json({ success: true, registration }, { status: 201 });
  } catch (error: any) {
    console.error('Registration Error:', error);
    
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Email ini sudah terdaftar' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Terjadi kesalahan pada server' },
      { status: 500 }
    );
  }
}
