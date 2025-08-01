import React from 'react';
import Navbar from './components/Navbar';
import HomeBanner from './components/HomeBanner';
import Courses from './components/Courses';
import Facilities from './components/Facilities';
import About from './components/About';
import HiringPartner from './components/HiringPartner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Academics from './components/Academics';
function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeBanner />
      {/* <Courses /> */}
      <Academics/>
      <Facilities />
      <About />
      <HiringPartner />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
