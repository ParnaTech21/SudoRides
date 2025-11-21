const User = require('../models/User');
const Driver = require('../models/Driver');
const Ride = require('../models/Ride');
const Payment = require('../models/Payment');

// Admin: Get system stats
exports.getStats = async (req, res) => {
  try {
    const users = await User.countDocuments();
    const drivers = await Driver.countDocuments();
    const rides = await Ride.countDocuments();
    const revenue = await Payment.aggregate([
      { $match: { status: 'paid' } },
      { $group: { _id: null, total: { $sum: '$amount' } } }
    ]);
    res.json({
      users,
      drivers,
      rides,
      totalRevenue: revenue[0]?.total || 0
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};