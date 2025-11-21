const User = require('../models/User');
const Driver = require('../models/Driver');
const jwt = require('jsonwebtoken');

// Helper to create JWT
const createToken = (user, role = 'rider') => {
  return jwt.sign({ id: user._id, role }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// Common registration for User or Driver
exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    let model = role === 'driver' ? Driver : User;
    const existing = await model.findOne({ email });
    if (existing) return res.status(400).json({ error: 'Email already in use.' });
    const user = await model.create({ name, email, password, role });
    const token = createToken(user, role);
    res.status(201).json({ user, token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login for User/Driver
exports.login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    let model = role === 'driver' ? Driver : User;
    const user = await model.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }
    const token = createToken(user, role);
    res.status(200).json({ user, token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};