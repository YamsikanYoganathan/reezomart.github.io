import React from "react";
import { useEffect, useState } from "react";
import api from "../../services/api";

export default function SellerDashboard() {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await api.get("/products/mine", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setProducts(data);
    };

    fetchProducts();
  }, [token]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="font-heading text-2xl mb-6">
          Seller Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product._id} className="card p-4">
              <h2 className="font-medium">{product.name}</h2>
              <p className="text-sm text-gray-500">
                {product.category}
              </p>
              <p className="mt-2 font-semibold">
                LKR {product.price}
              </p>
              <p className="text-sm text-gray-500">
                Stock: {product.stock}
              </p>
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <p className="text-gray-500 mt-6">
            No products added yet.
          </p>
        )}
      </div>
    </div>
  );
}
