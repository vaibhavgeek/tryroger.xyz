import { useState } from 'react';
import Eyes from './Eyes';

function Menu() {
  const [isHovered, setIsHovered] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home', isExternal: false },
    { href: '#about', label: 'About', isExternal: false },
    { href: 'https://blog.tryroger.xyz', label: 'Blog', isExternal: true },
  ];

  const handleNavClick = (e, link) => {
    if (!link.isExternal) {
      e.preventDefault();
      const element = document.querySelector(link.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      className="menu collapsed"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Eyes isMenuHovered={isHovered} />

      <nav>
        <div className="inner">
          <div className="btns">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="primary"
                onClick={(e) => handleNavClick(e, link)}
                {...(link.isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {link.label}
                {link.isExternal && <span className="arrow">↗</span>}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
