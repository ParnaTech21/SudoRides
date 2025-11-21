import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [role, setRole] = useState(localStorage.getItem('role') || 'rider')

  const login = (userObj, tokenStr, roleStr) => {
    setUser(userObj)
    setToken(tokenStr)
    setRole(roleStr)
    localStorage.setItem('user', JSON.stringify(userObj))
    localStorage.setItem('token', tokenStr)
    localStorage.setItem('role', roleStr)
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    setRole(null)
    localStorage.clear()
  }

  return (
    <AuthContext.Provider value={{ user, token, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}