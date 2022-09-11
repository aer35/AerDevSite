import { Link } from "@nextui-org/react";
import styles from "../styles/Header.module.scss";
// import dynamic from "next/dynamic";
// import { useTheme as useNextTheme } from 'next-themes'
// import { Switch, useTheme } from '@nextui-org/react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className={styles.header} id="header">
      <div className={styles.header__links}>
        <Link href="/" className={styles.header__name} block color="primary">
          Aaron Mechanic
        </Link>

        <Link href="/resume" block underline color="primary">
          Experience
        </Link>

        <Link href="/projects" block underline color="primary">
          Projects
        </Link>
      </div>
    </div>
  );
};

export default Header;
