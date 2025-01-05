const express = require('express');
const userController = require('../controllers/userController');
const { authenticateToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/:id', authenticateToken, userController.getUser);
router.put('/:id', authenticateToken, userController.update);
router.delete('/:id', authenticateToken, userController.remove);

module.exports = router;
