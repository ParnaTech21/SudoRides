import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">
        sudo-rides
      </Link>
      <nav>
        <Link to="/" className="mx-2">Home</Link>
        <Link to="/rider" className="mx-2">Rider</Link>
        <Link to="/driver" className="mx-2">Driver</Link>
        <Link to="/admin" className="mx-2">Admin</Link>
        <Link to="/login" className="mx-2">Login</Link>
        <Link to="/signup" className="mx-2">Signup</Link>
      </nav>
    </header>
  )
}