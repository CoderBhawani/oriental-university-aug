import React, { useEffect } from 'react';
import { useEnquiry } from './EnquiryContext';

const Courses = () => {
  const { openEnquiryModal } = useEnquiry();

  const courses = [
    {
      title: "Full Stack Development",
      duration: "6 Months",
      level: "Beginner to Advanced",
      price: "₹25,000",
      features: ["React & Node.js", "Database Design", "Live Projects", "Job Assistance"]
    },
    {
      title: "Digital Marketing",
      duration: "3 Months", 
      level: "All Levels",
      price: "₹15,000",
      features: ["SEO & SEM", "Social Media", "Analytics", "Campaign Management"]
    },
    {
      title: "UI/UX Design",
      duration: "4 Months",
      level: "Beginner",
      price: "₹20,000",
      features: ["Figma & Adobe XD", "User Research", "Prototyping", "Portfolio Building"]
    },
    {
      title: "Data Science",
      duration: "5 Months",
      level: "Intermediate",
      price: "₹30,000",
      features: ["Python & R", "Machine Learning", "Data Visualization", "Real Projects"]
    },
    {
      title: "Cloud Computing",
      duration: "4 Months",
      level: "Intermediate",
      price: "₹22,000",
      features: ["AWS & Azure", "DevOps", "Containerization", "Certification Prep"]
    },
    {
      title: "Mobile App Development",
      duration: "5 Months",
      level: "Beginner to Advanced",
      price: "₹28,000",
      features: ["React Native", "Flutter", "App Store Deploy", "Backend Integration"]
    }
  ];

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
    <section id="courses" className="section-professional bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 animate-on-scroll">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Popular Courses
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Choose from our industry-relevant courses designed to boost your career
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition duration-200 animate-on-scroll card-modern"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-3">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{course.title}</h3>
                <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                  <span>{course.duration}</span>
                  <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs">
                    {course.level}
                  </span>
                </div>
                <div className="text-xl font-bold text-primary-600 mb-3">{course.price}</div>
              </div>

              <div className="space-y-2 mb-4">
                {course.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>

              <button 
                onClick={openEnquiryModal}
                className="w-full bg-primary-600 text-white py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition duration-200 btn-modern"
              >
                Enroll Now
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-8 animate-on-scroll">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Can't Find Your Course?
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              We offer customized training programs for corporate and individual needs
            </p>
            <button 
              onClick={openEnquiryModal}
              className="bg-primary-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition duration-200 btn-modern"
            >
              Request Custom Course
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
