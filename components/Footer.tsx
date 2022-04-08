import styles from "../styles/Footer.module.scss";

const Footer = () => (
  <footer className={styles.feet}>
    Site in development 2022 -&nbsp;
    <a
      href="mailto:contact@aerdev.net"
      target="_blank"
      rel="noreferrer noopener"
    >
      Contact
    </a>
  </footer>
);

export default Footer;
