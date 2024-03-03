import _React from "react";
import { Navigate } from "react-router-dom";
import { PrivateRouteProps } from "../../@types/privateRoute";

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const token = JSON.parse(localStorage.getItem("profile")!);
  return token ? children : <Navigate to="/auth" />;
};

export default PrivateRoute;
