const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  ride: { type: mongoose.Schema.Types.ObjectId, ref: 'Ride', required: true },
  amount: { type: Number, required: true },
  method: {
    type: String,
    enum: ['cash', 'card', 'wallet'],
    default: 'cash'
  },
  status: {
    type: String,
    enum: ['pending', 'paid', 'failed'],
    default: 'pending'
  },
  paidAt: Date
});

module.exports = mongoose.model('Payment', PaymentSchema);