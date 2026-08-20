import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      whatsapp,
      packageType,
      visitorCount,
    } = body;

    if (
      !name ||
      !email ||
      !whatsapp ||
      !packageType ||
      !visitorCount
    ) {
      return NextResponse.json(
        {
          error: "Semua field wajib diisi",
        },
        {
          status: 400,
        }
      );
    }

    const registration = await prisma.whooshRegistration.create({
      data: {
        name,
        email,
        whatsapp,
        packageType,
        visitorCount: Number(visitorCount),
      },
    });

    return NextResponse.json({
      success: true,
      registration,
    }, { status: 201 });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Terjadi kesalahan server",
      },
      {
        status: 500,
      }
    );
  }
}
