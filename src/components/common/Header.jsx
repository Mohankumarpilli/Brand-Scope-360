// components/common/Header.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Platform", href: "#platform" },
    { label: "Solutions", href: "#solutions" },
    { label: "Resources", href: "#resources" },
    { label: "Company", href: "#company" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-lg border-b border-brand-red/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              {/* <div className="w-12 h-12 bg-gradient-to-br from-brand-red to-red-700 rounded-xl flex items-center justify-center shadow-lg shadow-brand-red/50">
                <Shield className="w-7 h-7 text-white" />
              </div> */}
              <motion.div
                className="flex items-center cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate("/")}
              >
                <Logo className="h-12 w-auto" variant="default" />
              </motion.div>
              {/* <motion.div
                className="flex items-center cursor-pointer"
                whileHover={{ scale: 1.05  }}
                onClick={() => navigate("/")}
              >
                <div className= " rounded-lg shadow-lg">
                  <img
                    src="/logo.png"
                    alt="Brand Scope 360"
                    className="h-20 w-auto"
                  />
                </div>
              </motion.div> */}
              {/* <div className="absolute -inset-1 bg-brand-red rounded-xl blur-md opacity-50 animate-pulse"></div> */}
            </div>
            <div>
              {/* <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-brand-red bg-clip-text text-transparent">
                Brand Scope 360
              </h1>
              <p className="text-xs text-gray-400">
                Brand Intelligence Platform
              </p> */}
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-brand-red bg-clip-text text-transparent">
                Brand Scope 360
              </h1>
              <p className="text-xs text-gray-400">
                Brand Intelligence Platform
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="relative text-gray-300 hover:text-white transition-colors group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all group-hover:w-full"></span>
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/login")} // Add this onClick
              className="px-6 py-2.5 text-brand-red border border-brand-red hover:bg-brand-red hover:text-white transition-all rounded-lg"
            >
              Login
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-gradient-to-r from-brand-red to-red-700 text-white hover:from-red-700 hover:to-red-800 transition-all rounded-lg shadow-lg shadow-brand-red/30"
            >
              Get Demo
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden py-4 border-t border-brand-red/20"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-brand-red transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4">
                <button // Change from motion.button to button
                  onClick={() => {
                    console.log("Login clicked");
                    navigate("/login");
                  }}
                  className="px-6 py-2.5 text-brand-red border border-brand-red hover:bg-brand-red hover:text-white transition-all rounded-lg"
                >
                  Login
                </button>
                <button className="px-6 py-2.5 bg-gradient-to-r from-brand-red to-red-700 text-white hover:from-red-700 hover:to-red-800 transition-all rounded-lg">
                  Get Demo
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
