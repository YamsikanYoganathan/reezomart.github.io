import React from "react";
import { useState } from "react";
import api from "../../services/api";

export default function SellerLogin() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const { data } = await api.post("/auth/seller/login", {
        emailOrPhone,
        password
      });

      localStorage.setItem("token", data.token);
      window.location.href = "/seller/dashboard";
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md card p-6">
        <h1 className="font-heading text-2xl mb-1">
          Seller Login
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Only approved sellers can access the dashboard
        </p>

        {error && (
          <div className="mb-4 text-sm text-red-600">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="input"
            placeholder="Email or Phone"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            required
          />

          <input
            type="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="button-primary w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
