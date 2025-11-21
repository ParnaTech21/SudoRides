const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getProfile, getRides } = require('../controllers/userController');

router.get('/me', auth, getProfile);
router.get('/rides', auth, getRides);

module.exports = router;