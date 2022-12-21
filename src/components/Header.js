import logo from "../images/logo.svg";

function Header() {
  return (
    <header className="header header-container">
      <img className="logo" src={logo} alt="Лого сервиса Mesto" />
    </header>
  );
}

export default Header;
