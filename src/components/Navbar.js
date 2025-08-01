import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-800 text-white fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="bg-white text-blue-900 p-2 rounded-lg">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold">Karanvati University</h1>
              <p className="text-xs text-blue-200">Excellence in Education</p>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-blue-200 transition duration-200 text-sm font-medium border-b-2 border-transparent hover:border-blue-200">
              Home
            </a>
            <a href="#academics" className="hover:text-blue-200 transition duration-200 text-sm font-medium border-b-2 border-transparent hover:border-blue-200">
              Academics
            </a>
            <a href="#admissions" className="hover:text-blue-200 transition duration-200 text-sm font-medium border-b-2 border-transparent hover:border-blue-200">
              Admissions
            </a>
            <a href="#campus" className="hover:text-blue-200 transition duration-200 text-sm font-medium border-b-2 border-transparent hover:border-blue-200">
              Campus Life
            </a>
            <a href="#research" className="hover:text-blue-200 transition duration-200 text-sm font-medium border-b-2 border-transparent hover:border-blue-200">
              Research
            </a>
            <a href="#contact" className="hover:text-blue-200 transition duration-200 text-sm font-medium border-b-2 border-transparent hover:border-blue-200">
              Contact
            </a>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition duration-200 shadow-md">
              Apply Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-200 focus:outline-none transition duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-800 border-t border-blue-700">
          <div className="px-2 py-3 space-y-1">
            <a
              href="#home"
              className="block px-3 py-2 text-white hover:text-blue-200 hover:bg-blue-700 rounded text-sm font-medium transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#academics"
              className="block px-3 py-2 text-white hover:text-blue-200 hover:bg-blue-700 rounded text-sm font-medium transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              Academics
            </a>
            <a
              href="#admissions"
              className="block px-3 py-2 text-white hover:text-blue-200 hover:bg-blue-700 rounded text-sm font-medium transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              Admissions
            </a>
            <a
              href="#campus"
              className="block px-3 py-2 text-white hover:text-blue-200 hover:bg-blue-700 rounded text-sm font-medium transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              Campus Life
            </a>
            <a
              href="#research"
              className="block px-3 py-2 text-white hover:text-blue-200 hover:bg-blue-700 rounded text-sm font-medium transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              Research
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-white hover:text-blue-200 hover:bg-blue-700 rounded text-sm font-medium transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <button className="w-full text-left bg-orange-500 text-white px-3 py-2 rounded text-sm font-medium hover:bg-orange-600 transition duration-200 mt-2">
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
