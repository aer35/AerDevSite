import DarkModeSwitch from "./DarkModeSwitch";
import "../styles/Header.scss";

const Header = () => (
  <div className={"header"} id="header">
    <div className="header__links">
      <a href="" className="header__name">
        Aaron Mechanic
      </a>

      <a href="#">Placeholder</a>
      <a href="#">Placeholder</a>
      <a href="#">Placeholder</a>
    </div>
    <div className="darkModeSwitch">
      <DarkModeSwitch />
    </div>
  </div>
);

export default Header;
