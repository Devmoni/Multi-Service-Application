const commentModel = require('../models/commentModel');

const addComment = async (req, res) => {
  const { post_id } = req.body;
  const { content } = req.body;
  const userId = req.user.id;  

  if (!post_id || !content) {
    return res.status(400).json({ message: 'Post ID and content are required.' });
  }

  try {
    console.log(post_id, content, userId);
    const comment = await commentModel.addComment(post_id, userId, content);
    res.status(201).json(comment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const getCommentsByPostId = async (req, res) => {
  const postId = req.query.post_id;

  if (!postId) {
    return res.status(400).json({ message: 'Post ID is required.' });
  }

  try {
    const comments = await commentModel.getCommentsByPostId(postId);
    res.status(200).json(comments);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addComment,
  getCommentsByPostId
};
