import Menu from './Menu';

function Header({ launched = false }) {
  return (
    <header>
      <Menu />
      <button className="meeting-btn">
        {launched ? 'Download' : 'Join Waitlist'}
      </button>
    </header>
  );
}

export default Header;
