import React from "react";
import PublicLayout from "../layouts/PublicLayout";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="mb-20">
        <div className="max-w-3xl mx-auto text-center text-gray-500">
          <span className="inline-block mb-4 rounded-full bg-gray-200 px-4 py-1 text-sm ">
            Unified Apparel Marketplace
          </span>

          <h1 className="heading text-blue-600 text-4xl sm:text-5xl md:text-6xl mb-6">
            One marketplace.Multiple brands.
          </h1>

          <p className="text-lg max-w-xl mx-auto mb-10">
            Discover, compare, and buy apparel from verified brands — all in one modern platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/customer/login"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-gray-50 font-medium hover:bg-blue-400 transition"
            >
              Shop as Customer
            </Link>

            <Link
              to="/seller/login"
              className="inline-flex items-center justify-center rounded-md border border-gray-200 px-6 py-3 text-blue-600 font-medium hover:border-blue-600 transition"
            >
              Sell as Brand
            </Link>
          </div>
        </div>
      </section>

      {/* Role Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Customer Card */}
        <div className="rounded-2xl border border-gray-200 shadow-sm p-10 hover:shadow-md transition">
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            👤
          </div>

          <h2 className="font-heading text-2xl mb-3">
            Customer
          </h2>

          <p className="text-gray-500 mb-8">
            Browse products from multiple brands, compare styles, and shop with
            confidence.
          </p>

          <Link
            to="/customer/login"
            className="button-primary w-full"
          >
            Continue as Customer
          </Link>
        </div>

        {/* Seller Card */}
        <div className="rounded-2xl border border-gray-200 shadow-sm p-10 hover:shadow-md transition">
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            🏷️
          </div>

          <h2 className="font-heading text-2xl mb-3">
            Seller / Brand
          </h2>

          <p className="text-gray-500 mb-8">
            Register your brand, get approved, and manage your products in one
            powerful dashboard.
          </p>

          <Link
            to="/seller/login"
            className="button-primary w-full"
          >
            Continue as Seller
          </Link>
        </div>
      </section>
    </PublicLayout>
  );
}
