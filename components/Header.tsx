import { Link } from "@nextui-org/react";
import styles from "../styles/Header.module.scss";
import dynamic from "next/dynamic";

const Header = () => {
  const DarkModeSwitch = dynamic(
    () => {
      return import("./DarkModeSwitch");
    },
    { ssr: false }
  );

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
