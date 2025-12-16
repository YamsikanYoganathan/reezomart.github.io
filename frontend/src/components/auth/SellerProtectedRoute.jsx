import React from "react";
import { Navigate } from "react-router-dom";

export default function SellerProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/seller/login" />;
  }

  return children;
}
