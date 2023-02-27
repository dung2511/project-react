import React from "react";
import { Navigate } from "react-router";
import { UserAuth } from "../reducer/AuthContext";

const Protected = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default Protected;
