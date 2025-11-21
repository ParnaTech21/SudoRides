const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getStats } = require('../controllers/adminController');

// Simple admin role check
router.get('/stats', auth, (req, res, next) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden.' });
  next();
}, getStats);

module.exports = router;