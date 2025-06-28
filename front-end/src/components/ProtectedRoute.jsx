import React from 'react';
import { Navigate } from 'react-router-dom';
import { ROLES } from '../utils/roles';

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  // Normal authentication check
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  if (!token || !user.userName) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute; 