import { PrismaClient } from '../generated/prisma/client'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import * as dotenv from 'dotenv'
import path from 'path'

// Memaksa memuat ulang dari file .env di disk setiap kali file ini dipanggil oleh hot-reload
dotenv.config({ path: path.resolve(process.cwd(), '.env'), override: true })

const prismaClientSingleton = () => {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL })
  const adapter = new PrismaPg(pool)
  return new PrismaClient({ adapter })
}

// Sementara bypass caching agar instance Prisma yang lama terhapus
const prisma = prismaClientSingleton()

export default prisma

