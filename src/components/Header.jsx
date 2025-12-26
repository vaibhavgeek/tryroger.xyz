import Menu from './Menu';

function Header() {
  return (
    <header>
      <Menu />
      <button className="meeting-btn">Download</button>
    </header>
  );
}

export default Header;
