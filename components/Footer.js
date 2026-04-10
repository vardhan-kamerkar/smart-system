"use client";
import Link from "next/link";

export const Footer=() =>{
  return (
    <footer className="mt-10 backdrop-blur-xl bg-gradient-to-r from-indigo-600/90 to-indigo-200/40 border-t border-white/30">

      <div className="max-w-7xl mx-auto px-6 py-10 text-center">

        {/* Title */}
        <h2 className="text-2xl font-bold text-white mb-2">
          ProductApp
        </h2>

        <p className="text-white/80 mb-6">
          Smart solutions for modern needs
        </p>

        {/* Links */}
        <div className="flex justify-center gap-6 text-white mb-6">
          <Link href="#">Home</Link>
          <Link href="#">Products</Link>
          <Link href="#">About</Link>
        </div>

        {/* Bottom */}
        <p className="text-sm text-white/70">
          © 2026 ProductApp. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
