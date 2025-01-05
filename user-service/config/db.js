const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

const createTables = async () => {
  const createUsersTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL
    );
  `;

  try {
    await pool.query(createUsersTableQuery);
    console.log('Users table is ready.');
  } catch (err) {
    console.error('Error creating tables:', err);
  }
};

createTables();

module.exports = pool;
