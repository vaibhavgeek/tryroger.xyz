import Menu from './Menu';

function Header({ launched = false }) {
  const handleWaitlistClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header>
      <Menu />
      <button className="meeting-btn" onClick={handleWaitlistClick}>
        {launched ? 'Download' : 'Join Waitlist'}
      </button>
    </header>
  );
}

export default Header;
