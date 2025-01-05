const express = require('express');
const commentController = require('../controllers/commentController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authenticateToken, commentController.addComment);
router.get('/', authenticateToken, commentController.getCommentsByPostId);

module.exports = router;
