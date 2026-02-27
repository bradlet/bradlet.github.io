import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import styles from "./Layout.module.css";

export default function Layout() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <span>Bradley Thompson</span>
        <span className={styles.sep}>/</span>
        <a
          href="mailto:mail@bradlet.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          mail@bradlet.com
        </a>
      </footer>
    </>
  );
}
