"use client";
import Link from "next/link";

export const Navbar=()=> {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-r from-indigo-600/90 to-indigo-200/40 border-b border-white/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white text-indigo-600 font-bold shadow-lg">
            P
          </div>
          <span className="text-xl font-semibold text-white">
            ProductApp
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-6 text-white font-medium">
          <Link href="#" className="hover:opacity-80 transition">
            Home
          </Link>
          <Link href="#" className="hover:opacity-80 transition">
            Products
          </Link>
          <Link href="#" className="hover:opacity-80 transition">
            About
          </Link>
        </div>

        {/* Button */}
        <Link
          href="/login"
          className="bg-white text-indigo-600 px-4 py-2 rounded-lg shadow hover:shadow-lg hover:scale-105 transition"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
