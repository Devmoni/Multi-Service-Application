const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('Connected to the database.');
  createTables();
});

const createTables = async () => {
  const commentsTableQuery = `
    CREATE TABLE IF NOT EXISTS comments (
      id SERIAL PRIMARY KEY,
      post_id INTEGER NOT NULL,
      user_id INTEGER NOT NULL,
      content TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (post_id) REFERENCES blogs(id) ON DELETE CASCADE,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
  `;

  try {
    await pool.query(commentsTableQuery);
    console.log('Comments table created or already exists.');
  } catch (err) {
    console.error('Error creating comments table:', err.message);
  }
};

module.exports = {
  query: (text, params) => pool.query(text, params),
  createTables
};
