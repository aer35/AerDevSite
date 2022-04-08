import { Link } from "@nextui-org/react";
import DarkModeSwitch from "./DarkModeSwitch";
import styles from "../styles/Header.module.scss";
import { useEffect } from "react";
import * as DarkReader from "darkreader";

const Header = () => {
  useEffect(() => {
    DarkReader.setFetchMethod(window.fetch);
  }, []);

  return (
    <div className={styles.header} id="header">
      <div className={styles.header__links}>
        <Link href="" className={styles.header__name} block color="primary">
          Aaron Mechanic
        </Link>

        <Link href="#" block underline color="primary">
          Resume
        </Link>
        <Link href="#" block underline color="primary">
          Projects
        </Link>
      </div>
      <div className={styles.darkModeSwitch}>
        <DarkModeSwitch />
      </div>
    </div>
  );
};

export default Header;
