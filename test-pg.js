const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const createTableQuery = `
CREATE TABLE IF NOT EXISTS "Registration" (
  "id" TEXT PRIMARY KEY,
  "name" TEXT NOT NULL,
  "email" TEXT UNIQUE NOT NULL,
  "whatsapp" TEXT NOT NULL,
  "city" TEXT NOT NULL,
  "date" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);
`;

pool.query(createTableQuery, (err, res) => {
  if (err) {
    console.error('Error creating table:', err.message);
  } else {
    console.log('Table Registration created successfully!');
  }
  process.exit(0);
});
