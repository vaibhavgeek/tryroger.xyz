import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

// Set to true when the app is launched and available for download
const launched = false;

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
      <Header launched={launched} />
      <Hero scrollProgress={scrollProgress} launched={launched} />

      <About />
      <Features />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
