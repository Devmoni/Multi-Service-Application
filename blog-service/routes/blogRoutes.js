const express = require('express');
const blogController = require('../controllers/blogController');
const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router();

router.post('/',authMiddleware, blogController.createBlog);
router.get('/',authMiddleware, blogController.getBlogs);
router.get('/:id', authMiddleware, blogController.getBlogById);
router.put('/:id',authMiddleware, blogController.updateBlog);
router.delete('/:id',authMiddleware, blogController.deleteBlog);

module.exports = router;
