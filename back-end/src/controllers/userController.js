const User = require('../models/User');
const Ride = require('../models/Ride');

// Get own profile
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(404).json({ error: 'User not found.' });
  }
};

// Get rides for this user
exports.getRides = async (req, res) => {
  try {
    const rides = await Ride.find({ rider: req.user.id }).populate('driver');
    res.json(rides);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};