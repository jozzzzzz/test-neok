import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("login")

  return isAuthenticated ? children : <Navigate to="/auth" />
};

export default ProtectedRoute
