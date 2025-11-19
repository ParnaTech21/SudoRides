import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

export default function useSocket(){
  const socketRef = useRef(null);
  useEffect(() => {
    const serverUrl = (import.meta.env.VITE_API_URL || 'http://localhost:5000').replace('/api','');
    socketRef.current = io(serverUrl, { transports: ['websocket','polling'] });
    return () => socketRef.current && socketRef.current.disconnect();
  }, []);
  return socketRef;
}
