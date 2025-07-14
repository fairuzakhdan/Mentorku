// src/components/Fragments/protectedRoute.jsx
import React from 'react';
// import { replace, useNavigate } from 'react-router';
import { Navigate } from 'react-router';

const ProtectedRoute = ({ children }) => {
  const authUser = localStorage.getItem('accessToken');
  if (!authUser) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
