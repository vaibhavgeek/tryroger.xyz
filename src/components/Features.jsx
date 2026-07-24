import { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const features = [
  {
    title: 'Career',
    question: '"Am I growing or just busy?"',
    testimonial: '"After 2 weeks of talking through my mornings with Roger, I finally quit the job I\'d been complaining about for 6 months."',
    author: '— Priya, 28, Product Manager',
  },
  {
    title: 'Relationships',
    question: '"Why did that conversation bother me?"',
    testimonial: '"I used to spiral after arguments. Now I talk to Roger for 5 minutes and actually understand what I\'m feeling before I text back."',
    author: '— Marcus, 31, Designer',
  },
  {
    title: 'Decisions',
    question: '"Should I take the offer?"',
    testimonial: '"Roger helped me think through a job switch I\'d been going back and forth on for months. Hearing myself say it out loud made it obvious."',
    author: '— Aisha, 26, Engineer',
  },
];

function Features() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="features-section">
      <div className="features-container">

        <div className="carousel">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <h2 className="feature-card-title">
                  <span className="title-roger">Roger</span>{' '}
                  <span className="title-relationships">{feature.title}</span>
                </h2>
                <p className="feature-card-question">{feature.question}</p>
                <blockquote className="feature-card-testimonial">
                  {feature.testimonial}
                </blockquote>
                <p className="feature-card-author">{feature.author}</p>
              </div>
            ))}
          </div>

          <div className="carousel-dots">
            {features.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Dancing Cat */}
        <div className="lottie-center-wrapper">
          <div className="lottie-feature">
            <DotLottieReact
              src="/Dance cat.lottie"
              loop
              autoplay
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Features;
