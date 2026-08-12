import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const { id, scanDate } = await request.json();

    if (!id) {
      return NextResponse.json(
        { success: false, message: 'ID Tiket tidak ditemukan dalam QR Code.' },
        { status: 400 }
      );
    }

    // Cari tiket di database
    const registration = await prisma.registration.findUnique({
      where: { id },
    });

    if (!registration) {
      return NextResponse.json(
        { success: false, message: 'Tiket palsu atau tidak terdaftar!' },
        { status: 404 }
      );
    }

    if (scanDate && registration.date !== scanDate) {
      return NextResponse.json(
        { 
          success: false, 
          message: `Jadwal salah! Tiket ini untuk tanggal ${registration.date}.`,
          data: registration 
        },
        { status: 400 }
      );
    }

    if (registration.isAttended) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Tiket sudah pernah digunakan / discan sebelumnya!',
          data: registration 
        },
        { status: 400 }
      );
    }

    // Update status kehadiran
    const updatedRegistration = await prisma.registration.update({
      where: { id },
      data: {
        isAttended: true,
        attendedAt: new Date(),
      },
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Check-in berhasil!',
        data: updatedRegistration 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in scan API:', error);
    return NextResponse.json(
      { success: false, message: 'Terjadi kesalahan pada server.' },
      { status: 500 }
    );
  }
}
