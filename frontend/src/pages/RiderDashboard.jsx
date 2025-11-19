import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import useSocket from '../hooks/useSocket';
import api from '../api/api';
import Map from '../components/Map';

export default function RiderDashboard() {
  const { user } = useContext(AuthContext);
  const socketRef = useSocket();
  const [pickup, setPickup] = useState({ lat: 0, lng: 0 });
  const [destination, setDestination] = useState({ lat: 0, lng: 0 });
  const [ride, setRide] = useState(null);
  const [driverLocation, setDriverLocation] = useState(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const socket = socketRef.current;
    if (!socket || !user) return;
    socket.emit('rider:join', { riderId: user.id || user._id });
    socket.on('ride:created', (data) => {
      setRide({ id: data.rideId, fare: data.fare });
      alert(`Ride created — fare: ${data.fare}`);
    });
    socket.on('ride:accepted', (data) => {
      alert('Driver accepted your ride!');
    });
    socket.on('ride:driverLocation', (d) => {
      setDriverLocation(d.coords);
      setMarkers(mk => {
        const newMarkers = [...mk.filter(x => x.id !== 'driver'), { id: 'driver', title: 'Driver', position: d.coords }];
        return newMarkers;
      });
    });
    socket.on('driver:location:updated', ({ driverId, coords }) => {
      // optional: show drivers
    });
    return () => {
      socket.off('ride:created'); socket.off('ride:accepted'); socket.off('ride:driverLocation');
    };
  }, [socketRef, user]);

  const handleUseCurrent = () => {
    if (!navigator.geolocation) return alert('No geolocation');
    navigator.geolocation.getCurrentPosition(pos => setPickup({ lat: pos.coords.latitude, lng: pos.coords.longitude }));
  };

  const requestRide = () => {
    if (!user) return alert('Login first');
    const payload = { riderId: user.id || user._id, pickup, destination };
    socketRef.current.emit('ride:request', payload);
    setMarkers([{ id: 'pickup', title: 'Pickup', position: pickup }, { id: 'dest', title: 'Destination', position: destination }]);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-4">
      <h2 className="text-2xl font-semibold">Rider Dashboard</h2>
      <div className="flex gap-4">
        <div className="w-1/3 bg-white p-4 rounded shadow">
          <button className="btn mb-2" onClick={handleUseCurrent}>Use current location</button>
          <div>
            <label className="block text-sm">Pickup (lat,lng)</label>
            <input value={`${pickup.lat},${pickup.lng}`} onChange={(e)=>{ const [lat,lng]=e.target.value.split(',').map(Number); setPickup({lat,lng}); }} className="w-full border p-2 rounded" />
          </div>
          <div className="mt-2">
            <label className="block text-sm">Destination (lat,lng)</label>
            <input value={`${destination.lat},${destination.lng}`} onChange={(e)=>{ const [lat,lng]=e.target.value.split(',').map(Number); setDestination({lat,lng}); }} className="w-full border p-2 rounded" />
          </div>
          <div className="mt-4">
            <button className="btn btn-primary w-full" onClick={requestRide}>Request Ride</button>
          </div>
          {ride && <div className="mt-3">Ride id: {ride.id} — fare: {ride.fare}</div>}
        </div>
        <div className="w-2/3">
          <Map center={pickup.lat !==0 ? pickup : { lat: 0, lng: 0 }} markers={markers.map(m => ({ position: m.position, title: m.title }))} />
        </div>
      </div>
    </div>
  );
}
