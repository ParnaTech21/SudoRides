const Driver = require('../models/Driver');
const Ride = require('../models/Ride');

// Get own driver profile
exports.getProfile = async (req, res) => {
  try {
    const driver = await Driver.findById(req.user.id).select('-password');
    res.json(driver);
  } catch (err) {
    res.status(404).json({ error: 'Driver not found.' });
  }
};

// Get rides for this driver
exports.getRides = async (req, res) => {
  try {
    const rides = await Ride.find({ driver: req.user.id }).populate('rider');
    res.json(rides);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update driver availability
exports.setAvailability = async (req, res) => {
  try {
    const { isAvailable } = req.body;
    const driver = await Driver.findByIdAndUpdate(req.user.id, { isAvailable }, { new: true });
    res.json(driver);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};