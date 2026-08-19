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

    // Cari tiket di database (pengunjung atau UMKM)
    const visitorRegistration = await prisma.registration.findUnique({
      where: { id },
    });
    const isUmkm = !visitorRegistration;
    const registration = visitorRegistration ?? (await prisma.umkmRegistration.findUnique({
      where: { id },
    }));

    if (!registration) {
      return NextResponse.json(
        { success: false, message: 'Tiket palsu atau tidak terdaftar!' },
        { status: 404 }
      );
    }

    // Normalisasi tanggal untuk kompatibilitas tiket lama
    let normalizedDbDate = registration.date;
    const dateMap: Record<string, string> = {
      'August 21, 2026': '21 Agustus 2026',
      'August 22, 2026': '22 Agustus 2026',
      'August 23, 2026': '23 Agustus 2026',
    };
    if (dateMap[normalizedDbDate]) {
      normalizedDbDate = dateMap[normalizedDbDate];
    }

    if (scanDate && normalizedDbDate !== scanDate) {
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
    const updateData = { isAttended: true, attendedAt: new Date() };
    const updatedRegistration = isUmkm
      ? await prisma.umkmRegistration.update({ where: { id }, data: updateData })
      : await prisma.registration.update({ where: { id }, data: updateData });

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
