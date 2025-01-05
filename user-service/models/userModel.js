const pool = require('../config/db');

const createUser = async (username, hashedPassword) => {
  const result = await pool.query(
    'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username',
    [username, hashedPassword]
  );
  return result.rows[0];
};

const findUserByUsername = async (username) => {
  const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
  return result.rows[0];
};

const findUserById = async (id) => {
  const result = await pool.query('SELECT id, username FROM users WHERE id = $1', [id]);
  return result.rows[0];
};

const updateUser = async (id, username, hashedPassword) => {
  const result = await pool.query(
    'UPDATE users SET username = $1, password = $2 WHERE id = $3 RETURNING id, username',
    [username, hashedPassword, id]
  );
  return result.rows[0];
};

const deleteUser = async (id) => {
  await pool.query('DELETE FROM users WHERE id = $1', [id]);
};

module.exports = {
  createUser,
  findUserByUsername,
  findUserById,
  updateUser,
  deleteUser,
};
