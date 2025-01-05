const pool = require('../config/db');

const createBlog = async (title, content) => {
  const result = await pool.query(
    'INSERT INTO blogs (title, content) VALUES ($1, $2) RETURNING id, title, content',
    [title, content]
  );
  return result.rows[0];
};

const getBlogs = async (page, limit) => {
  const offset = (page - 1) * limit;
  const result = await pool.query(
    'SELECT id, title, content FROM blogs ORDER BY created_at DESC LIMIT $1 OFFSET $2',
    [limit, offset]
  );
  return result.rows;
};

const getBlogById = async (id) => {
  const result = await pool.query(
    'SELECT id, title, content FROM blogs WHERE id = $1',
    [id]
  );
  return result.rows[0];
};

const updateBlog = async (id, title, content) => {
  const result = await pool.query(
    'UPDATE blogs SET title = $1, content = $2 WHERE id = $3 RETURNING id, title, content',
    [title, content, id]
  );
  return result.rows[0];
};

const deleteBlog = async (id) => {
  const result = await pool.query(
    'DELETE FROM blogs WHERE id = $1 RETURNING id',
    [id]
  );
  return result.rows[0];
};

module.exports = {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
