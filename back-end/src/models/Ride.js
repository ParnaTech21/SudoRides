const mongoose = require('mongoose');

const RideSchema = new mongoose.Schema({
  rider: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  driver: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver', required: true },
  origin: {
    address: String,
    lat: Number,
    lng: Number
  },
  destination: {
    address: String,
    lat: Number,
    lng: Number
  },
  fare: Number,
  status: {
    type: String,
    enum: ['requested', 'accepted', 'picked_up', 'completed', 'cancelled'],
    default: 'requested'
  },
  requestedAt: { type: Date, default: Date.now },
  completedAt: Date,
  payment: { type: mongoose.Schema.Types.ObjectId, ref: 'Payment' }
});

module.exports = mongoose.model('Ride', RideSchema);