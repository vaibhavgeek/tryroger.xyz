import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Eyes from './Eyes';

function Menu({ isScrollExpanded = false }) {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isExpanded = isHomePage ? (isScrollExpanded || isHovered) : isHovered;

  const handleHomeClick = (e) => {
    if (isHomePage) {
      e.preventDefault();
      const element = document.querySelector('#home');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      className={`menu ${isExpanded ? '' : 'collapsed'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Eyes isMenuHovered={isExpanded} />

      <nav>
        <div className="inner">
          <div className="btns">
            <a
              href="#home"
              className="primary"
              onClick={handleHomeClick}
            >
              Home
            </a>

            <a
              href="https://x.com/vaibhavgeek"
              className="primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              DM Founder
              <span className="arrow">↗</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
