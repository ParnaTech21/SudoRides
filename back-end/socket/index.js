const socketIo = require('socket.io');

// Attach sockets to server
module.exports = (server) => {
  const io = socketIo(server, {
    cors: { origin: '*' }
  });

  io.on('connection', (socket) => {
    console.log(`Socket connected: ${socket.id}`);

    // Example: Subscribe to ride updates
    socket.on('subscribeRide', (rideId) => {
      socket.join(`ride_${rideId}`);
    });

    // Broadcast ride status update to subscribers
    socket.on('rideStatusUpdate', (rideId, status) => {
      io.to(`ride_${rideId}`).emit('rideStatusChanged', { rideId, status });
    });

    socket.on('disconnect', () => {
      console.log(`Socket disconnected: ${socket.id}`);
    });
  });
};