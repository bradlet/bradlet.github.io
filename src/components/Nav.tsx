import { NavLink } from "react-router-dom";
import { features } from "../config/features";
import styles from "./Nav.module.css";

const baseLinks = [
  { to: "/", label: "Home" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
];

const links = features.blog
  ? [...baseLinks, { to: "/blog", label: "Blog" }]
  : baseLinks;

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logo}>
          bradlet<span className={styles.logoDot}>.</span>
        </NavLink>
        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ""}`
                }
                end={link.to === "/"}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
