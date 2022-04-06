import { Link } from "@nextui-org/react";
import DarkModeSwitch from "./DarkModeSwitch";
import "../styles/Header.scss";

const Header = () => (
  <div className={"header"} id="header">
    <div className="header__links">
      <Link href="" className="header__name" block color="primary">
        Aaron Mechanic
      </Link>

      <Link href="#" block underline color="primary">
        Placeholder
      </Link>
      <Link href="#" block underline color="primary">
        Placeholder
      </Link>
      <Link href="#" block underline color="primary">
        Placeholder
      </Link>
    </div>
    <div className="darkModeSwitch">
      <DarkModeSwitch />
    </div>
  </div>
);

export default Header;
