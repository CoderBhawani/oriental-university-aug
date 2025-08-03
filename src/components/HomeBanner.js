import React from 'react';
import { useEnquiry } from './EnquiryContext';

const HomeBanner = () => {
  const { openEnquiryModal } = useEnquiry();

  return (
    <section id="home" className="pt-12 pb-4" style={{ backgroundColor: '#FFF3EE' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Mobile Form */}
        <div className="lg:hidden mb-6">
          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="text-center mb-3">
              <h2 className="text-base font-bold" style={{ color: '#333333' }}>Admission Open 2025-26</h2>
              <p className="text-sm text-gray-500">Quick inquiry form</p>
            </div>

            <form className="space-y-2">
              <input
                type="text"
                name="name"
                required
                className="w-full text-sm border border-gray-300 rounded-md px-3 py-2"
                placeholder="Full Name"
              />
              <input
                type="email"
                name="email"
                required
                className="w-full text-sm border border-gray-300 rounded-md px-3 py-2"
                placeholder="Email Address"
              />
              <input
                type="tel"
                name="phone"
                required
                className="w-full text-sm border border-gray-300 rounded-md px-3 py-2"
                placeholder="Phone Number"
              />
              <input
                type="text"
                name="courseInterest"
                required
                className="w-full text-sm border border-gray-300 rounded-md px-3 py-2"
                placeholder="Course You're Interested In"
              />
              <button
                onClick={openEnquiryModal}
                type="submit"
                className="w-full text-white rounded-md px-4 py-2 hover:opacity-90"
                style={{ backgroundColor: '#333333' }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left */}
          <div className="space-y-5">
            <div className="space-y-2">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug" style={{ color: '#333333' }}>
                Discover Excellence at
                <span className="block" style={{ color: '#333333' }}>Oriental University</span>
              </h1>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Embark on a transformative educational journey with our world-class programs, distinguished faculty, and state-of-the-art facilities designed to nurture tomorrow's leaders.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <button 
                onClick={openEnquiryModal}
                className="text-white px-5 py-2 rounded-md text-sm hover:opacity-90"
                style={{ backgroundColor: '#0A294D' }}
              >
                Explore Programs
              </button>
              <button 
                onClick={openEnquiryModal}
                className="border text-white px-5 py-2 rounded-md text-sm hover:opacity-90"
                style={{ borderColor: '#0A294D', backgroundColor: '#0A294D' }}
              >
                Campus Tour
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="text-center">
                <div className="text-xl font-bold" style={{ color: '#333333' }}>15K+</div>
                <div className="text-xs text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold" style={{ color: '#333333' }}>75+</div>
                <div className="text-xs text-gray-600">Programs</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold" style={{ color: '#333333' }}>98%</div>
                <div className="text-xs text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Desktop Form */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-center mb-4">
                <h2 className="text-lg font-bold" style={{ color: '#333333' }}>Admission Open 2025-26</h2>
                <p className="text-sm text-gray-500">Begin your journey with us</p>
              </div>

              <form className="space-y-2">
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  placeholder="Full Name"
                />
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  placeholder="Email Address"
                />
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  placeholder="Phone Number"
                />
                <input
                  type="text"
                  name="courseInterest"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  placeholder="Course You're Interested In"
                />
                <button
                  onClick={() =>
                    window.open('https://wa.me/917357057610', '_blank')
                  }
                  type="button"
                  className="w-full text-white rounded-md px-4 py-2 hover:opacity-90"
                  style={{ backgroundColor: '#0A294D' }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;