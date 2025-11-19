import React, { createContext, useState, useEffect } from 'react';
import api from '../api/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.get('/users/me').then(res => setUser(res.data)).catch(() => { localStorage.removeItem('token'); setUser(null); });
    }
  }, []);
  const login = (token, userData) => { localStorage.setItem('token', token); setUser(userData); };
  const logout = () => { localStorage.removeItem('token'); setUser(null); };
  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
