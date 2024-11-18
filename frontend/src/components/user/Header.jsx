import React, { useState } from "react";
import { Search, Heart, ShoppingCart, Menu, User, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  logoutUser } from "@/store/authSlice";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 const {user} = useSelector((state) => state.auth)
 console.log(user);
 

  const dispatch = useDispatch()



 const handleLogout = () => {
  dispatch(logoutUser())
 }

  return (
    <header className="bg-white shadow-md z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-4">
        {/* Top bar */}
        <div className="flex justify-between items-center">
          {/* Left: Search Bar */}
          <div className="flex items-center space-x-4">
            <form className="relative">
              <input
                type="text"
                className="border border-gray-300 rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-primary-500 transition duration-300"
                placeholder="Search"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 transition duration-300" />
            </form>
          </div>

          {/* Center: Logo */}
          <div className="flex items-center justify-center">
            <Link
              to="/"
              className="text-2xl font-semibold text-gray-900 hover:text-primary-500 transition duration-300"
            >
              Admizzer Shoppers
            </Link>
          </div>

          {/* Right: Icons (User, Heart, Cart, Mobile Menu) */}
          <div className="flex items-center space-x-6">
            {user ? (
              <>
                {/* Show Username */}
                <span className="text-gray-700">{user.username}</span>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="text-gray-500 hover:text-primary-500 transition duration-300"
                >
                  <LogOut className="h-6 w-6" />
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="text-gray-500 hover:text-primary-500 transition duration-300"
              >
                <User className="h-6 w-6" />
              </Link>
            )}

            <Link
              to="#"
              className="text-gray-500 hover:text-primary-500 transition duration-300"
            >
              <Heart className="h-6 w-6" />
            </Link>
            <Link
              to="/cart"
              className="relative text-gray-500 hover:text-primary-500 transition duration-300"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                2
              </span>
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-gray-500 hover:text-primary-500 transition duration-300"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav
          className={`lg:flex mt-4 ${menuOpen ? "block" : "hidden"} lg:block`}
        >
          <ul className="flex space-x-8 items-center justify-center">
            <li>
              <Link
                to="/"
                className="text-gray-900 hover:text-primary-500 transition duration-300 py-2 px-4 rounded-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-900 hover:text-primary-500 transition duration-300 py-2 px-4 rounded-md"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/list"
                className="text-gray-900 hover:text-primary-500 transition duration-300 py-2 px-4 rounded-md"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/catalogue"
                className="text-gray-900 hover:text-primary-500 transition duration-300 py-2 px-4 rounded-md"
              >
                Catalogue
              </Link>
            </li>
            <li>
              <Link
                to="/new-arrivals"
                className="text-gray-900 hover:text-primary-500 transition duration-300 py-2 px-4 rounded-md"
              >
                New Arrivals
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-900 hover:text-primary-500 transition duration-300 py-2 px-4 rounded-md"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu: Sidebar for small screens */}
      <div
        className={`lg:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-40 ${
          menuOpen ? "block" : "hidden"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div className="absolute right-0 top-0 bg-white w-64 h-full shadow-md p-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <Menu className="h-6 w-6" />
          </button>
          <ul className="space-y-4 mt-10">
            <li>
              <Link to="/" className="text-gray-900 hover:text-primary-500">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-900 hover:text-primary-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link to="/list" className="text-gray-900 hover:text-primary-500">
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/catalogue"
                className="text-gray-900 hover:text-primary-500"
              >
                Catalogue
              </Link>
            </li>
            <li>
              <Link
                to="/new-arrivals"
                className="text-gray-900 hover:text-primary-500"
              >
                New Arrivals
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-900 hover:text-primary-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
