import Menu from './Menu';

function Header({ launched = false, scrollProgress = 0 }) {
  const handleWaitlistClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Menu is expanded when at top of page (scrollProgress < 0.05)
  const isMenuExpanded = scrollProgress < 0.05;

  return (
    <header>
      <Menu isScrollExpanded={isMenuExpanded} />
      <button className="meeting-btn" onClick={handleWaitlistClick}>
        {launched ? 'Download' : 'Join Waitlist'}
      </button>
    </header>
  );
}

export default Header;
