"use client"

import { useState } from "react"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="bg-[#163156] h-16 relative z-10">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo and Brand - positioned absolutely to extend below navbar */}
          <div className="flex items-center">
            {/* Logo container with positioning */}
            <div className="absolute left-4 top-0 z-20">
              <div className="w-20 h-20 rounded-full bg-white border-2 border-[#FFA000] flex items-center justify-center">
                <img src="/images/broom-duck.svg" alt="QuackWash Logo" className="w-16 h-16" />
              </div>
            </div>
            {/* Brand name - hidden in mobile view */}
            <div className="ml-24 hidden md:block">
              <span className="text-white text-2xl font-bold">QuackWash</span>
            </div>
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden lg:flex items-center space-x-8 ml-8">
            <a href="#" className="text-white hover:text-gray-300">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Find a Cleaner
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              How it Works?
            </a>
          </div>

          {/* Right Side Links */}
          <div className="flex items-center space-x-6">
            <button className="bg-[#52C970] text-white px-2 py-1 md:px-4 md:py-2 rounded-full font-bold text-sm">
              BOOK A CALL NOW!
            </button>
            <a href="#" className="text-white hover:text-gray-300 hidden md:inline">
              Become a Cleaner
            </a>
            <a href="#" className="text-white hover:text-gray-300 hidden md:inline">
              Login
            </a>

            {/* Mobile menu button */}
            <button className="text-white lg:hidden" onClick={toggleMobileMenu} aria-label="Toggle menu">
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Slides down when open */}
      <div
        className={`absolute w-full bg-[#163156] z-30 shadow-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-white hover:text-gray-300 py-2 border-b border-gray-700">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-300 py-2 border-b border-gray-700">
              Find a Cleaner
            </a>
            <a href="#" className="text-white hover:text-gray-300 py-2 border-b border-gray-700">
              How it Works?
            </a>
            <a href="#" className="text-white hover:text-gray-300 py-2 border-b border-gray-700">
              Become a Cleaner
            </a>
            <a href="#" className="text-white hover:text-gray-300 py-2 border-b border-gray-700">
              Login
            </a>
            <div className="py-2">
              <button className="bg-[#52C970] text-white px-4 py-2 rounded-full font-bold text-sm w-full">
                BOOK A CALL NOW!
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={toggleMobileMenu} aria-hidden="true"></div>
      )}
    </div>
  )
}

export default Navbar
