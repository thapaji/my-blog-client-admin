import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const AuthComponent = ({ children }) => {
  const { user } = useSelector((state) => state.userInfo);
  return user?._id ? children : <Navigate to="/" />;
};