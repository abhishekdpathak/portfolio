import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;