import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Eyes from './Eyes';

function Menu({ isScrollExpanded = false }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);
  const location = useLocation();

  // On subpages, menu should always be in collapsed state (hover to expand)
  const isHomePage = location.pathname === '/';
  const isExpanded = isHomePage ? (isScrollExpanded || isHovered) : isHovered;

  const navLinks = [
    { href: '#home', label: 'Home', isExternal: false, isHash: true },
    { href: '#about', label: 'About', isExternal: false, isHash: true },
  ];

  const useCaseLinks = [
    { href: '/usecases/dating', label: 'Dating' },
    { href: '/usecases/office', label: 'Office' },
  ];

  useEffect(() => {
    if (isDropdownOpen && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 10,
        left: rect.left + rect.width / 2 - 70, // Center the dropdown
      });
    }
  }, [isDropdownOpen]);

  const handleNavClick = (e, link) => {
    if (link.isHash) {
      if (!isHomePage) {
        // If not on home page, navigate to home first
        return;
      }
      e.preventDefault();
      const element = document.querySelector(link.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      className={`menu ${isExpanded ? '' : 'collapsed'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsDropdownOpen(false);
      }}
    >
      <Eyes isMenuHovered={isExpanded} />

      <nav>
        <div className="inner">
          <div className="btns">
            {navLinks.map((link, index) => (
              link.isHash && !isHomePage ? (
                <Link
                  key={index}
                  to={`/${link.href}`}
                  className="primary"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={index}
                  href={link.isHash ? link.href : link.href}
                  className="primary"
                  onClick={(e) => handleNavClick(e, link)}
                  {...(link.isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  {link.label}
                  {link.isExternal && <span className="arrow">↗</span>}
                </a>
              )
            ))}

            {/* Use Cases Dropdown Trigger */}
            <div
              className="dropdown-container"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button ref={triggerRef} className="primary dropdown-trigger">
                Use Cases
                <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>▾</span>
              </button>
            </div>

            <a
              href="https://blog.tryroger.xyz"
              className="primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
              <span className="arrow">↗</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Dropdown Menu - Rendered outside nav to avoid overflow issues */}
      <div
        className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}
        style={{ top: dropdownPosition.top, left: dropdownPosition.left }}
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        {useCaseLinks.map((link, index) => (
          <Link
            key={index}
            to={link.href}
            className="dropdown-item"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Menu;
