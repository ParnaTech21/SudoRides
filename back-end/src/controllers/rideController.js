const Ride = require('../models/Ride');
const Driver = require('../models/Driver');
const fareCalculator = require('../utils/fareCalculator');

// Request a new ride
exports.requestRide = async (req, res) => {
  try {
    const { origin, destination } = req.body;
    // Find available driver
    const driver = await Driver.findOne({ isAvailable: true });
    if (!driver) return res.status(400).json({ error: 'No drivers available.' });
    const fare = fareCalculator(origin, destination);
    const ride = await Ride.create({
      rider: req.user.id,
      driver: driver._id,
      origin,
      destination,
      fare,
      status: 'requested'
    });
    await Driver.findByIdAndUpdate(driver._id, { isAvailable: false });
    res.status(201).json(ride);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update ride status
exports.updateStatus = async (req, res) => {
  try {
    const { rideId } = req.params;
    const { status } = req.body;
    const ride = await Ride.findByIdAndUpdate(rideId, { status }, { new: true });
    res.json(ride);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};