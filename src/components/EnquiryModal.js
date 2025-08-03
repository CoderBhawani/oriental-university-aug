import React, { useState } from 'react';

const EnquiryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courseInterest: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hi! I'm interested in your courses.
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Course Interest: ${formData.courseInterest}
Please contact me for more information.`;

    const whatsappNumber = " 7357057610";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setFormData({
      name: '',
      email: '',
      phone: '',
      courseInterest: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Get Started</h2>
              <p className="text-sm text-gray-500">Fill the quick form to enquire</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
            >
              ×
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Full Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Email Address"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Phone Number"
            />
            <input
              type="text"
              name="courseInterest"
              value={formData.courseInterest}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Course You're Interested In"
            />
            <button
              type="submit"
              className="w-full bg-red-600 text-white rounded-md px-4 py-2 hover:bg-red-700 transition duration-200 font-medium"
              style={{ backgroundColor: '#C73336' }}
            >
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;
