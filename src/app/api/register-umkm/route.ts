import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { UMKM_REGISTRATION_ENABLED, UMKM_REGISTRATION_QUOTA } from '@/lib/constants';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, whatsapp, businessName, category, date } = body;

    // Validate
    if (!name || !email || !whatsapp || !businessName || !category || !date) {
      return NextResponse.json(
        { error: 'Semua field wajib diisi' },
        { status: 400 }
      );
    }

    const totalUmkm = await prisma.umkmRegistration.count();
    if (!UMKM_REGISTRATION_ENABLED || totalUmkm >= UMKM_REGISTRATION_QUOTA) {
      return NextResponse.json(
        { error: 'Pendaftaran UMKM sudah ditutup. Silakan daftar sebagai visitor.' },
        { status: 403 }
      );
    }

    // Save to database
    const registration = await prisma.umkmRegistration.create({
      data: {
        name,
        email,
        whatsapp,
        businessName,
        category,
        date,
      },
    });

    return NextResponse.json({ success: true, registration }, { status: 201 });
  } catch (error: any) {
    console.error('UMKM Registration Error:', error);

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
