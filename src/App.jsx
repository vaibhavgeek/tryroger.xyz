import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import About from './components/About';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Dating from './pages/Dating';
import Office from './pages/Office';
import PrivacyPolicy from './pages/PrivacyPolicy';

function HomePage({ scrollProgress }) {
  return (
    <main>
      <Hero scrollProgress={scrollProgress} />
      <TrustedBy />
      <About />
      <Features />
      <FAQ />
    </main>
  );
}

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Calculate scroll progress for hero fade (0 to 1) over 1600px for much smoother effect
      const progress = Math.min(1, scrollY / 1600);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header scrollProgress={scrollProgress} />
      <Routes>
        <Route path="/" element={<HomePage scrollProgress={scrollProgress} />} />
        
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
