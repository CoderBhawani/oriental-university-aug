import React, { useEffect } from 'react';
import { useEnquiry } from './EnquiryContext';

const CampusLife = () => {
  const campusFeatures = [
    {
      title: "Student Housing",
      description: "Modern dormitories with all amenities for comfortable living",
      icon: "🏠",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Sports Complex",
      description: "State-of-the-art gymnasium, swimming pool, and sports facilities",
      icon: "🏃‍♂️",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Library & Study Spaces",
      description: "24/7 library access with quiet study areas and group rooms",
      icon: "📚",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Student Center",
      description: "Hub for student activities, dining, and social gatherings",
      icon: "🎭",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Research Labs",
      description: "Cutting-edge laboratories for hands-on research experience",
      icon: "🔬",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Cultural Events",
      description: "Regular festivals, concerts, and cultural celebrations",
      icon: "🎪",
      image: "/api/placeholder/300/200"
    }
  ];

  const studentClubs = [
    { name: "Debate Society", members: "200+", icon: "🎤" },
    { name: "Drama Club", members: "150+", icon: "🎭" },
    { name: "Music Society", members: "180+", icon: "🎵" },
    { name: "Photography Club", members: "120+", icon: "📸" },
    { name: "Robotics Club", members: "90+", icon: "🤖" },
    { name: "Environmental Club", members: "160+", icon: "🌱" },
    { name: "Literary Society", members: "140+", icon: "📖" },
    { name: "Sports Club", members: "300+", icon: "⚽" }
  ];

  const { openEnquiryModal } = useEnquiry();

  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="campus" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Vibrant Campus Life
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience a dynamic campus environment that fosters personal growth, friendships, and unforgettable memories.
          </p>
        </div>

        {/* Campus Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {campusFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-6xl">{feature.icon}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                <button className="text-blue-600 font-medium hover:text-blue-800 transition duration-200">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Student Organizations */}
        <div className="animate-on-scroll">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Student Organizations
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join one of our many student clubs and organizations to pursue your interests and make lasting connections.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {studentClubs.map((club, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:from-blue-50 hover:to-blue-100 transition duration-300 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-3">{club.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">{club.name}</h4>
                <p className="text-xs text-gray-600">{club.members} members</p>
              </div>
            ))}
          </div>
        </div>

        {/* Campus Statistics */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white animate-on-scroll">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Campus by Numbers</h3>
            <p className="text-blue-100">Discover what makes our campus special</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ background: 'linear-gradient(to right, #C73336, #A02B2E)' }}>500+</div>
              <div className="text-blue-200 text-sm">Acres Campus</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ background: 'linear-gradient(to right, #C73336, #A02B2E)' }}>50+</div>
              <div className="text-blue-200 text-sm">Student Clubs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-200 text-sm">Library Access</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-blue-200 text-sm">WiFi Coverage</div>
            </div>
          </div>
        </div>

        {/* Virtual Tour CTA */}
        <div className="text-center mt-12 animate-on-scroll">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Experience Our Campus
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Take a virtual tour of our beautiful campus or schedule an in-person visit to see what makes Karanvati University special.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={openEnquiryModal}
                style={{ background: 'linear-gradient(to right, #C73336, #A02B2E)' }}
                className="text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
              >
                Virtual Campus Tour
              </button>
              <button 
                onClick={openEnquiryModal}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-200"
              >
                Schedule Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusLife;
