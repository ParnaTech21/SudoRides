import React, { useState, useContext } from 'react';
import api from '../api/api';
import { AuthContext } from '../context/AuthContext';

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState(''); const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await api.post('/auth/login', { email, password });
      login(res.data.token, res.data.user);
      window.location.href = res.data.user.role === 'driver' ? '/driver' : '/rider';
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  const handleGoogle = async () => {
    // client obtains idToken using google client (not implemented in this snippet)
    // For now user can paste an idToken from Google test flow or implement gapi
    const idToken = prompt('paste google idToken (for demo)'); 
    if (!idToken) return;
    const res = await api.post('/auth/google', { idToken });
    login(res.data.token, res.data.user);
    window.location.href = res.data.user.role === 'driver' ? '/driver' : '/rider';
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h3 className="text-xl">Login</h3>
      <input className="w-full border p-2 my-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input type="password" className="w-full border p-2 my-2" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button className="btn btn-primary w-full" onClick={handleLogin}>Login</button>
      <button className="btn w-full mt-2" onClick={handleGoogle}>Sign in with Google</button>
    </div>
  );
}
