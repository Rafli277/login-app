import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return isAuthenticated ? children : <Navigate to="/" replace />;
};

// PASTIKAN EXPORT DEFAULT ADA!
export default PrivateRoute;
