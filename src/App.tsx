import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import AboutDetailed from './components/AboutDetailed';
import Work from './components/Work';
import EducationalPlatforms from './components/EducationalPlatforms';
import Blog from './components/Blog';
import MachveyGuidance from './components/MachveyGuidance';
import { Gallery } from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import YoutubeChannel from './components/YoutubeChannel';
import Skilloyuva from './components/Skilloyuva';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<AboutDetailed />} />
        <Route path="/gallery" element={<><Header /><Gallery /><Footer /></>} />
        <Route path="/" element={
          <>
            <Header />
            <main className="overflow-hidden">
              <Hero />
              <About />
              <Skilloyuva />
              <YoutubeChannel />
              <Work />
              <EducationalPlatforms />
              <Blog />
              <MachveyGuidance />
              <Testimonials />
              <Contact />
            </main>
            <Footer />
            <BackToTop />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;