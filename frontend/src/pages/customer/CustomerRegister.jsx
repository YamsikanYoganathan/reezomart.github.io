import React from "react";
import { useState } from "react";
import api from "../../services/api";

export default function CustomerRegister() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await api.post("/auth/customer/register", form);
      window.location.href = "/customer/login";
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md card p-6">
        <h1 className="font-heading text-2xl mb-1">
          Create Customer Account
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Sign up to start shopping
        </p>

        {error && (
          <div className="mb-4 text-sm text-red-600">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="input"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />
          <input
            className="input"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            className="input"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            className="input"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <button className="button-primary w-full">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
