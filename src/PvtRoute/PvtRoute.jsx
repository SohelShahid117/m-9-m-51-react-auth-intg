import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PvtRoute = ({ children }) => {
  console.log(children);
  const { user, loading } = useContext(AuthContext);
  console.log(user);
  if (loading) {
    return <span>LOADING...</span>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PvtRoute;
