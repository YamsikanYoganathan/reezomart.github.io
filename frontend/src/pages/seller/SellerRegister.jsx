import React from "react";
import { useState } from "react";
import api from "../../services/api";

export default function SellerRegister() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    brandName: "",
    ownerName: "",
    NIC: ""
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      await api.post("/auth/seller/register", form);
      setMessage(
        "Registration successful. Your seller account is pending admin approval."
      );
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-lg card p-6">
        <h1 className="font-heading text-2xl mb-1">
          Seller Registration
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Register your brand to start selling
        </p>

        {error && (
          <div className="mb-4 text-sm text-red-600">{error}</div>
        )}
        {message && (
          <div className="mb-4 text-sm text-green-600">{message}</div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <input
            className="input"
            name="brandName"
            placeholder="Brand Name"
            onChange={handleChange}
            required
          />
          <input
            className="input"
            name="ownerName"
            placeholder="Owner / Manager Name"
            onChange={handleChange}
            required
          />
          <input
            className="input"
            name="NIC"
            placeholder="NIC Number"
            onChange={handleChange}
            required
          />
          <input
            className="input"
            name="name"
            placeholder="Account Holder Name"
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

          <button className="button-primary mt-2">
            Submit for Approval
          </button>
        </form>
      </div>
    </div>
  );
}
