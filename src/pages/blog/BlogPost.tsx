import { useParams } from "react-router-dom";
import { getBlogPost } from "../../data/blog";
import Markdown from "../../components/Markdown";
import styles from "./BlogPost.module.css";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return (
      <div className={styles.notFound}>
        <h1>Post not found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.meta}>
          <img
            src="/ProPortrait.jpg"
            alt={post.author}
            className={styles.avatar}
          />
          <span>{post.author}</span>
          <span className={styles.sep}>&middot;</span>
          <span>{post.date}</span>
          <span className={styles.sep}>&middot;</span>
          <span>{post.estimatedTime}</span>
        </div>
      </header>
      <Markdown content={post.content} />
    </article>
  );
}
