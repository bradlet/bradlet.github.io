import { Link } from "react-router-dom";
import { blogPosts } from "../../data/blog";
import styles from "./BlogIndex.module.css";

function getExcerpt(content: string, maxLength = 150): string {
  const plain = content
    .replace(/^#+\s.*$/gm, "")
    .replace(/[*_`~[\]]/g, "")
    .replace(/\n+/g, " ")
    .trim();
  if (plain.length <= maxLength) return plain;
  return plain.slice(0, maxLength).trimEnd() + "...";
}

export default function BlogIndex() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Blog</h1>
      <p className={styles.subtitle}>
        Thoughts on software engineering, systems design, and building things.
      </p>
      <div className={styles.posts}>
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className={styles.card}
          >
            <h2 className={styles.cardTitle}>{post.title}</h2>
            <div className={styles.cardMeta}>
              <span>{post.date}</span>
              <span className={styles.sep}>&middot;</span>
              <span>{post.estimatedTime}</span>
            </div>
            <p className={styles.cardExcerpt}>{getExcerpt(post.content)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
