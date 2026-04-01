import { Outlet, NavLink, useParams } from "react-router-dom";
import { getBlogPostMetas } from "../../data/blog";
import styles from "./BlogLayout.module.css";

export default function BlogLayout() {
  const { slug } = useParams();
  const metas = getBlogPostMetas();

  return (
    <div className={styles.blogContainer}>
      <aside className={`${styles.sidebar} ${slug ? styles.sidebarHiddenMobile : ""}`}>
        <h2 className={styles.sidebarTitle}>Posts</h2>
        <nav className={styles.postList}>
          {metas.map((post) => (
            <NavLink
              key={post.slug}
              to={`/blog/${post.slug}`}
              className={({ isActive }) =>
                `${styles.postLink} ${isActive ? styles.postLinkActive : ""}`
              }
            >
              <span className={styles.postLinkTitle}>{post.title}</span>
              <span className={styles.postLinkDate}>{post.date}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
      <div className={styles.content}>
        {slug && (
          <NavLink to="/blog" className={styles.backLink}>
            &larr; All posts
          </NavLink>
        )}
        <Outlet />
      </div>
    </div>
  );
}
