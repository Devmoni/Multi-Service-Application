const pool = require('../config/db');

const addComment = async (postId, userId, content) => {
  const query = `
    INSERT INTO comments (post_id, user_id, content) 
    VALUES ($1, $2, $3) 
    RETURNING *;
  `;
  const values = [postId, userId, content];
  
  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.log(error);
    throw new Error('Error adding comment');
  }
};

const getCommentsByPostId = async (postId) => {
  const query = `
    SELECT c.id, c.content, c.created_at, u.username 
    FROM comments c 
    JOIN users u ON c.user_id = u.id 
    WHERE c.post_id = $1 
    ORDER BY c.created_at ASC;
  `;
  const values = [postId];
  
  try {
    const result = await pool.query(query, values);
    return result.rows;
  } catch (error) {
    throw new Error('Error fetching comments');
  }
};

module.exports = {
  addComment,
  getCommentsByPostId
};
