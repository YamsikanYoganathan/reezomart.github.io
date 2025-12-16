import React from "react";
import { useState } from "react";
import api from "../../services/api";

export default function AddProduct() {
  const token = localStorage.getItem("token");
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    availableSizes: "",
    availableColors: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.post(
      "/products",
      {
        ...form,
        availableSizes: form.availableSizes.split(","),
        availableColors: form.availableColors.split(",")
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    window.location.href = "/seller/dashboard";
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-lg card p-6">
        <h1 className="font-heading text-xl mb-4">
          Add Product
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="input"
            name="name"
            placeholder="Product Name"
            onChange={handleChange}
            required
          />
          <input
            className="input"
            name="category"
            placeholder="Category"
            onChange={handleChange}
            required
          />
          <input
            className="input"
            name="price"
            type="number"
            placeholder="Price"
            onChange={handleChange}
            required
          />
          <input
            className="input"
            name="stock"
            type="number"
            placeholder="Stock"
            onChange={handleChange}
            required
          />
          <input
            className="input"
            name="availableSizes"
            placeholder="Sizes (S,M,L)"
            onChange={handleChange}
          />
          <input
            className="input"
            name="availableColors"
            placeholder="Colors (Black,White)"
            onChange={handleChange}
          />

          <button className="button-primary w-full">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
