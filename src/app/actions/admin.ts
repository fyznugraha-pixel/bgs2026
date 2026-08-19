'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function deleteRegistration(id: string) {
  try {
    await prisma.registration.delete({
      where: { id }
    })
    revalidatePath('/bgs-hq-panel-2026')
    return { success: true }
  } catch (error) {
    console.error('Delete error:', error)
    return { success: false, error: 'Gagal menghapus data' }
  }
}
export async function deleteUmkmRegistration(id: string) {
  try {
    await prisma.umkmRegistration.delete({
      where: { id }
    })
    revalidatePath('/bgs-hq-panel-2026')
    return { success: true }
  } catch (error) {
    console.error('Delete error:', error)
    return { success: false, error: 'Gagal menghapus data' }
  }
}
