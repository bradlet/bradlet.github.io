import { projects, githubUrl } from "../data/projects";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <div className={styles.page}>
      <h1 className={styles.pageTitle}>Projects</h1>
      <p className={styles.intro}>
        Side projects I build to explore ideas outside of work. More on{" "}
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        .
      </p>

      <div className={styles.grid}>
        {projects.map((project) => (
          <article key={project.name} className={styles.card}>
            <div className={styles.cardHeader}>
              <h2 className={styles.projectName}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </a>
              </h2>
            </div>

            <p className={styles.description}>{project.description}</p>

            <div className={styles.details}>
              <div className={styles.detailSection}>
                <h3 className={styles.detailLabel}>Stack</h3>
                <div className={styles.techTags}>
                  {project.techStack.map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.detailSection}>
                <h3 className={styles.detailLabel}>Features</h3>
                <ul className={styles.features}>
                  {project.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
