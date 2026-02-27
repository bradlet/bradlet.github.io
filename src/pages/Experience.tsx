import { experience, education } from "../data/experience";
import { skills } from "../data/skills";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <div className={styles.page}>
      <h1 className={styles.pageTitle}>Experience</h1>

      <section className={styles.timeline}>
        {experience.map((entry) => (
          <article key={entry.company} className={styles.entry}>
            <div className={styles.entryHeader}>
              <h2 className={styles.company}>{entry.company}</h2>
              <span className={styles.location}>{entry.location}</span>
            </div>
            {entry.roles.map((role) => (
              <div key={role.title} className={styles.role}>
                <span className={styles.roleTitle}>{role.title}</span>
                <span className={styles.period}>{role.period}</span>
              </div>
            ))}
            {entry.highlights.length > 0 && (
              <ul className={styles.highlights}>
                {entry.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <div className={styles.skillGrid}>
          {skills.map((cat) => (
            <div key={cat.category} className={styles.skillCategory}>
              <h3 className={styles.skillLabel}>{cat.category}</h3>
              <p className={styles.skillItems}>{cat.items.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <div className={styles.eduList}>
          {education.map((edu) => (
            <div key={edu.degree} className={styles.eduEntry}>
              <div className={styles.eduHeader}>
                <span className={styles.eduDegree}>{edu.degree}</span>
                <span className={styles.period}>{edu.year}</span>
              </div>
              <span className={styles.eduSchool}>{edu.school}</span>
              {edu.focus && (
                <span className={styles.eduFocus}>{edu.focus}</span>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
