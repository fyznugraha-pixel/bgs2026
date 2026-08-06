const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
prisma.$connect().then(() => {
  console.log('Connected successfully!');
  process.exit(0);
}).catch(err => {
  console.error('Connection error:', err.message);
  process.exit(1);
});
