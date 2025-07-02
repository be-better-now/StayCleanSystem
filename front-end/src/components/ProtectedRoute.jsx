import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  // Debug logs
  console.log('ProtectedRoute loaded');
  console.log('user:', user);
  console.log('user.role:', user.role);
  console.log('allowedRoles:', allowedRoles);

  if (!token || !user.role) {
    console.warn('No token or user.role found, redirecting to /login');
    return <Navigate to="/login" replace />;
  }

  if (
    allowedRoles.length > 0 &&
    !allowedRoles.map(r => r.toLowerCase()).includes((user.role || '').toLowerCase())
  ) {
    console.warn(`Role '${user.role}' is not allowed. Allowed roles:`, allowedRoles);
    return (
      <div style={{padding: 32, textAlign: 'center', color: 'red'}}>
        <h2>You do not have permission to access this page!</h2>
        <p>Your current role: <b>{user.role}</b></p>
        <p>Allowed roles: <b>{allowedRoles.join(', ')}</b></p>
        <a href="/">Back to Home</a>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute; 