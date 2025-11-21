const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { requestRide, updateStatus } = require('../controllers/rideController');

router.post('/request', auth, requestRide);
router.put('/:rideId/status', auth, updateStatus);

module.exports = router;