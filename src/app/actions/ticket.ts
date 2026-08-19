'use server'

import prisma from '@/lib/prisma'

export async function searchTicketByEmail(email: string) {
  try {
    const registration = await prisma.registration.findFirst({
      where: { email },
      select: { id: true },
      orderBy: { createdAt: 'desc' } // Get the most recent if multiple
    })

    if (registration) {
      return { success: true, id: registration.id }
    }

    const umkmRegistration = await prisma.umkmRegistration.findFirst({
      where: { email },
      select: { id: true },
      orderBy: { createdAt: 'desc' }
    })

    if (umkmRegistration) {
      return { success: true, id: umkmRegistration.id }
    }

    return { success: false, error: 'Tiket dengan email tersebut tidak ditemukan.' }
  } catch (error) {
    console.error('Search error:', error)
    return { success: false, error: 'Terjadi kesalahan saat mencari tiket.' }
  }
}
