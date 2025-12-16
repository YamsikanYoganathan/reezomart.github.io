import React from "react";

export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b-slate-600 bg-white">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center">
          <span className="heading text-2xl text-blue-600">ReezoMart</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-10">
        {children}
      </main>
    </div>
  );
}
