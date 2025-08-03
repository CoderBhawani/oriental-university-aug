import React, { useState } from 'react';
import { useEnquiry } from './EnquiryContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openEnquiryModal } = useEnquiry();

  const handleApplyClick = () => {
    openEnquiryModal();
  };

  return (
    <>
      <nav className="text-white fixed w-full z-50 shadow-lg" style={{ background: 'linear-gradient(to right, #C73336, #A02B2E)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <img
                  src="/logo.jpeg"
                  alt="Karanvati University Logo"
                  className="h-8 w-8 object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold">Karanvati University</h1>
                <p className="text-xs text-red-200">Excellence in Education</p>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-red-200 transition duration-200 text-sm font-medium border-b-2 border-transparent hover:border-red-200">
                Home
              </a>
              <a href="#academics" className="hover:text-red-200 transition duration-200 text-sm font-medium border-b-2 border-transparent hover:border-red-200">
                Academics
              </a>
              <a href="#admissions" className="hover:text-red-200 transition duration-200 text-sm font-medium border-b-2 border-transparent hover:border-red-200">
                Admissions
              </a>
              <a href="#campus" className="hover:text-red-200 transition duration-200 text-sm font-medium border-b-2 border-transparent hover:border-red-200">
                Campus Life
              </a>
              <a href="#research" className="hover:text-red-200 transition duration-200 text-sm font-medium border-b-2 border-transparent hover:border-red-200">
                Research
              </a>
              <a href="#contact" className="hover:text-red-200 transition duration-200 text-sm font-medium border-b-2 border-transparent hover:border-red-200">
                Contact
              </a>
              <button 
                onClick={handleApplyClick}
                className="bg-white text-red-600 px-6 py-2 rounded-full text-sm font-medium hover:bg-red-50 transition duration-200 shadow-md"
              >
                Apply Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-red-200 focus:outline-none focus:text-red-200"
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
          <div className="md:hidden bg-red-800 bg-opacity-95">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-sm font-medium text-white hover:text-red-200 hover:bg-red-700 rounded-md transition duration-200">
                Home
              </a>
              <a href="#academics" className="block px-3 py-2 text-sm font-medium text-white hover:text-red-200 hover:bg-red-700 rounded-md transition duration-200">
                Academics
              </a>
              <a href="#admissions" className="block px-3 py-2 text-sm font-medium text-white hover:text-red-200 hover:bg-red-700 rounded-md transition duration-200">
                Admissions
              </a>
              <a href="#campus" className="block px-3 py-2 text-sm font-medium text-white hover:text-red-200 hover:bg-red-700 rounded-md transition duration-200">
                Campus Life
              </a>
              <a href="#research" className="block px-3 py-2 text-sm font-medium text-white hover:text-red-200 hover:bg-red-700 rounded-md transition duration-200">
                Research
              </a>
              <a href="#contact" className="block px-3 py-2 text-sm font-medium text-white hover:text-red-200 hover:bg-red-700 rounded-md transition duration-200">
                Contact
              </a>
              <button 
                onClick={handleApplyClick}
                className="w-full text-left bg-white text-red-600 px-3 py-2 rounded text-sm font-medium hover:bg-red-50 transition duration-200 mt-2"
              >
                Apply Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
