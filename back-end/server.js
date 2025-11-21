require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const app = express();
const server = http.createServer(app);

// Connect DB
require('./src/config/db');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./src/routes/auth'));
app.use('/api/users', require('./src/routes/users'));
app.use('/api/drivers', require('./src/routes/drivers'));
app.use('/api/rides', require('./src/routes/rides'));
app.use('/api/admin', require('./src/routes/admin'));

// Error Handler
app.use(require('./src/middleware/errorHandler'));

// Sockets
require('./socket/index')(server);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});