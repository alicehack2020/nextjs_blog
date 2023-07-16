import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/">
            <span className="text-2xl font-bold text-gray-800">Home</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
