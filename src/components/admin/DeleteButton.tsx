'use client'

import { useState } from 'react'
import { deleteRegistration, deleteUmkmRegistration } from '@/app/actions/admin'

export default function DeleteButton({ id, type = 'visitor' }: { id: string, type?: 'visitor' | 'umkm' }) {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    if (!confirm('Apakah Anda yakin ingin menghapus data peserta ini? Data yang dihapus tidak bisa dikembalikan.')) return
    
    setIsDeleting(true)
    const result = type === 'umkm' ? await deleteUmkmRegistration(id) : await deleteRegistration(id)
    if (!result.success) {
      alert(result.error)
      setIsDeleting(false)
    }
    // Jika sukses, Next.js akan memanggil revalidatePath dan merender ulang tabel
  }

  return (
    <button 
      onClick={handleDelete}
      disabled={isDeleting}
      className={`text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-md font-medium text-xs transition-colors ${isDeleting ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {isDeleting ? 'Menghapus...' : 'Hapus'}
    </button>
  )
}
