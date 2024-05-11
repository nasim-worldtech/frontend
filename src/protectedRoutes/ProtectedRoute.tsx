import React from 'react';
import Cookies from 'js-cookie';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const user = localStorage.getItem('user');
  const token = Cookies.get('token');
  let location = useLocation();

  if (!token && !user) {
    return <Navigate to="/auth/signin" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
