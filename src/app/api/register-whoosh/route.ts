import { NextResponse } from "next/server";

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

    // sementara belum simpan database
    console.log("WHOOSH REGISTRATION:", {
      name,
      email,
      whatsapp,
      packageType,
      visitorCount,
    });

    return NextResponse.json({
      success: true,
      registration: {
        id: "TEMP-WHOOSH-001",
        name,
        email,
        whatsapp,
        packageType,
        visitorCount,
      },
    });

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