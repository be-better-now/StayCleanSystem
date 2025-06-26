import React from 'react';
import { Navigate } from 'react-router-dom';
import { ROLES } from '../utils/roles';

const getCurrentUser = () => {
  try {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  } catch (error) {
    // It's better to clear corrupted data
    localStorage.removeItem('user');
    console.error("Failed to parse user from localStorage", error);
    return null;
  }
};

const PublicRoute = ({ children }) => {
  const currentUser = getCurrentUser();

  const staffRoles = [ROLES.STAFF, ROLES.MANAGER, ROLES.ADMIN];

  // If a user is logged in AND has a staff role, redirect them away from public pages
  if (currentUser && staffRoles.includes(currentUser.role)) {
    return <Navigate to="/staff" replace />;
  }

  // Otherwise, allow access to the public page
  return children;
};

export default PublicRoute; 