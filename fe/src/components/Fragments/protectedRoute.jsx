// src/components/Fragments/protectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router';

const ProtectedRoute = ({ children }) => {
  const authUser = JSON.parse(localStorage.getItem('authUser'));

  if (!authUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
