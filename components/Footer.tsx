import styles from "../styles/Footer.module.scss";

const Footer = () => (
  <footer className={styles.feet}>
    <div className={styles.left}>
      Site in development 2022 -{" "}
      <a
        href="mailto:contact@aerdev.net"
        target="_blank"
        rel="noreferrer noopener"
      >
        Contact
      </a>
    </div>
    <div className={styles.right}>
      Developed using{" "}
      <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
        Next.JS
      </a>{" "}
      and{" "}
      <a href="https://nextui.org" target="_blank" rel="noreferrer">
        NextUI
      </a>
    </div>
  </footer>
);

export default Footer;
