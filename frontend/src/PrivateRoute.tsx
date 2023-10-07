import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
 // Make sure to import RootState from your Redux store


interface PrivateRouteProps {
  element: React.ReactNode;
  path: string;
}


const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, path }) => {
  const isAuthenticated = useSelector(
    (state: any) => state.auth.token
  );


  return isAuthenticated ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/" replace />
  );
};


export default PrivateRoute;



