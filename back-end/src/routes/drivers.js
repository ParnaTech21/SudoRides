const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getProfile, getRides, setAvailability } = require('../controllers/driverController');

router.get('/me', auth, getProfile);
router.get('/rides', auth, getRides);
router.put('/availability', auth, setAvailability);

module.exports = router;