import React, { useEffect, useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import useSocket from '../hooks/useSocket';
import api from '../api/api';
import Map from '../components/Map';

export default function DriverDashboard() {
  const { user } = useContext(AuthContext);
  const socketRef = useSocket();
  const [isAvailable, setIsAvailable] = useState(false);
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [incomingRide, setIncomingRide] = useState(null);

  useEffect(() => {
    const socket = socketRef.current;
    if (!socket || !user) return;
    socket.emit('driver:join', { driverId: user.id || user._id });

    socket.on('ride:incoming', (ride) => {
      setIncomingRide(ride);
    });

    return () => { socket.off('ride:incoming'); };
  }, [socketRef, user]);

  useEffect(() => {
    let watchId;
    if (navigator.geolocation) {
      watchId = navigator.geolocation.watchPosition(pos => {
        const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        setLocation(coords);
        socketRef.current.emit('driver:updateLocation', { driverId: user.id || user._id, coords });
      }, console.error, { enableHighAccuracy: true, maximumAge: 2000 });
    }
    return () => { if (watchId) navigator.geolocation.clearWatch(watchId); };
  }, [socketRef, user]);

  const toggleAvailable = () => {
    const newVal = !isAvailable;
    setIsAvailable(newVal);
    api.post('/drivers/toggleAvailable', { isAvailable: newVal }).catch(console.error);
    socketRef.current.emit('driver:setAvailable', { driverId: user.id || user._id, isAvailable: newVal });
  };

  const acceptRide = () => {
    if (!incomingRide) return;
    socketRef.current.emit('ride:accept', { rideId: incomingRide.rideId, driverId: user.id || user._id });
    setIncomingRide(null);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-4">
      <h2 className="text-2xl font-semibold">Driver Dashboard</h2>
      <div className="flex gap-4">
        <div className="w-1/3 bg-white p-4 rounded shadow">
          <button className="btn w-full mb-3" onClick={toggleAvailable}>{isAvailable ? 'Go offline' : 'Go available'}</button>
          <div>Current: {location.lat.toFixed(5)}, {location.lng.toFixed(5)}</div>
          {incomingRide && (
            <div className="mt-4 p-3 border rounded">
              <div>Incoming ride — fare: {incomingRide.fare}</div>
              <button className="btn btn-primary mt-2" onClick={acceptRide}>Accept</button>
            </div>
          )}
        </div>
        <div className="w-2/3">
          <Map center={location} markers={[{ position: location, title: 'You' }]} />
        </div>
      </div>
    </div>
  );
}
