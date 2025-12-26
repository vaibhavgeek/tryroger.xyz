import { useState } from 'react';
import Eyes from './Eyes';

function Menu() {
  const [isHovered, setIsHovered] = useState(false);

  const navLinks = [
    { href: '#', label: 'Home', isExternal: false },
    { href: '#', label: 'About', isExternal: false },
    { href: '#', label: 'Community', isExternal: false },
    { href: '#', label: 'Blog', isExternal: true },
  ];

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
              <a key={index} href={link.href} className="primary">
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
