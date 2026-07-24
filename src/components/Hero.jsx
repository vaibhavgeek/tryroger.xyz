import { useState, useEffect } from 'react';
import CTAButton from './CTAButton';

const WORDS = ['ambition', 'career', 'growth', 'progress', 'kindness', 'courage', 'fearless', 'focus', 'discipline', 'balance', 'grit', 'hustle', 'love'];

function FloatingWords() {
  const [visibleWords, setVisibleWords] = useState([]);

  useEffect(() => {
    let id = 0;
    let index = 0;
    const spawn = () => {
      const word = WORDS[index % WORDS.length];
      index++;
      const left = 10 + Math.random() * 80;
      const top = 10 + Math.random() * 70;
      const newWord = { id: id++, word, left, top };
      setVisibleWords(prev => [...prev, newWord]);
      setTimeout(() => {
        setVisibleWords(prev => prev.filter(w => w.id !== newWord.id));
      }, 2000);
    };

    spawn();
    const interval = setInterval(spawn, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-words">
      {visibleWords.map(({ id, word, left, top }) => (
        <span
          key={id}
          className="floating-word"
          style={{ left: `${left}%`, top: `${top}%` }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}

function Hero({ scrollProgress = 0 }) {
  // Calculate transform values based on scroll - VERY strong parallax effect
  const scale = 1 - (scrollProgress * 0.5); // Scale from 1 to 0.5 (much more dramatic)
  const opacity = 1 - (scrollProgress * 3); // Fade out very fast
  const translateY = scrollProgress * -250; // Move up significantly as we scroll

  return (
    <section id="home" className="hero">
      <FloatingWords />
      <div className="hero-sticky">
        <div
          className="hero-content"
          style={{
            transform: `scale(${scale}) translateY(${translateY}px)`,
            opacity: Math.max(0, opacity),
            willChange: 'transform, opacity'
          }}
        >
          <h1>
            Roger that. 🫡
          </h1>

          <br/>
          <h2>
            <span className="word-your">be heard,</span> <br/>
            <span className="word-contextual">grow,</span> <br/>
            <span className="word-companion">and journal</span>
          </h2>

          <div id="waitlist" className="hero-cta">
            <CTAButton theme="light" showCat={true} />
          </div>
        </div>
      </div>
    </section>
  );
}



export default Hero;
