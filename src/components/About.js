import React, { useEffect } from 'react';

const About = () => {
  const stats = [
    { number: "10K+", label: "Students Trained" },
    { number: "95%", label: "Placement Rate" },
    { number: "50+", label: "Industry Partners" },
    { number: "5+", label: "Years Experience" }
  ];

  const features = [
    {
      icon: "🎯",
      title: "Industry-Focused",
      description: "Curriculum designed with industry requirements"
    },
    {
      icon: "👥",
      title: "Expert Faculty",
      description: "Learn from experienced professionals"
    },
    {
      icon: "💼",
      title: "Job Assistance",
      description: "Dedicated placement support team"
    },
    {
      icon: "🏆",
      title: "Proven Results",
      description: "Track record of successful careers"
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
    <section id="about" className="section-professional gradient-secondary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 animate-on-scroll">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            About Karanvati
          </h2>
          <p className="text-gray-600 text-sm max-w-3xl mx-auto">
            We are committed to providing quality education that transforms careers and builds futures. 
            Our comprehensive approach combines theoretical knowledge with practical skills.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-white rounded-lg p-4 border border-gray-200 animate-on-scroll card-modern"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-2xl font-bold text-primary-600 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-4 text-center border border-gray-200 hover:shadow-md transition duration-200 animate-on-scroll card-modern"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-2xl mb-2">{feature.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">{feature.title}</h3>
              <p className="text-gray-600 text-xs leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-on-scroll">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To provide accessible, high-quality education that empowers individuals with the skills 
              and knowledge needed to succeed in today's competitive job market. We bridge the gap 
              between academic learning and industry requirements.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To become the leading educational institution that transforms lives through innovative 
              learning experiences, creating a skilled workforce that drives economic growth and 
              technological advancement in our community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
