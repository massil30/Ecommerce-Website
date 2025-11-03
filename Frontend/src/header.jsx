import React, { useState } from "react";
import { Menu, X, User, Search, Heart, ShoppingCart } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 mt-0 p-0 bg-white shadow-sm w-full">
      <div className="flex items-center justify-between w-full  ">
        {/* LEFT SECTION */}
        <div className="flex items-center gap-3">
          <img
            src="src/assets/logo.png"
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
          <h1
            className="text-2xl md,sm:text-xl font-bold"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Furniro
          </h1>
        </div>

        {/* CENTER NAVIGATION */}
<nav className="items-center hidden md:flex gap-[clamp(1rem,4vw,3rem)]">
          {["Home", "Shop", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[1rem] md:0.8rem font-medium text-gray-700 hover:text-blue-600 transition-colors"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* RIGHT ICONS */}
        <div className="hidden  sm:flex items-center md:gap-3 sm:gap-4 lg:gap-6">
          <User className="w-6 h-6 text-gray-700 cursor-pointer hover:text-blue-600" />
          <Search className="w-6 h-6 text-gray-700 cursor-pointer hover:text-blue-600" />
          <Heart className="w-6 h-6 text-gray-700 cursor-pointer hover:text-blue-600" />
          <ShoppingCart className="w-6 h-6 text-gray-700 cursor-pointer hover:text-blue-600" />
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="sm:hidden flex items-center"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE DRAWER MENU */}
      {open && (
        <div className="sm:hidden bg-white border-t border-gray-200 py-4 px-6 space-y-4">
          {["Home", "Shop", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-[1rem] text-gray-700 font-medium hover:text-blue-600"
              style={{ fontFamily: "Poppins, sans-serif" }}
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="flex items-around gap-6 pt-4 border-t border-gray-200">
            <User className="w-6 h-6 text-gray-700" />
            <Search className="w-6 h-6 text-gray-700" />
            <Heart className="w-6 h-6 text-gray-700" />
            <ShoppingCart className="w-6 h-6 text-gray-700" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
