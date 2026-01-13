import React from 'react';
import Navbar from '../ui/Navbar';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import TrainingPrograms from '../sections/TrainingPrograms';
import Testimonials from '../sections/Testimonials';
import FAQ from '../sections/FAQ';
import Footer from '../sections/Footer';

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="w-full bg-[#0a0a0a]">
        {/* Section 1: Hero */}
        <div className="relative w-full z-50 bg-[#0a0a0a]">
          <Hero />
        </div>

        {/* Section 2: Services */}
        <div id="services" className="relative w-full z-40 bg-[#0a0a0a]">
          <Services />
        </div>

        {/* Section 3: Training Programs */}
        <div id="programs" className="relative w-full z-30 bg-[#0a0a0a]">
          <TrainingPrograms />
        </div>

        {/* Section 4: Testimonials */}
        <div className="relative w-full z-30 bg-[#0a0a0a]">
          <Testimonials />
        </div>

        {/* Section 5: FAQ */}
        <div className="relative w-full z-30 bg-[#0a0a0a]">
          <FAQ />
        </div>

        {/* Section 6: Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Home;