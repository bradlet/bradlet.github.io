import styles from "./Home.module.css";

const highlights = [
  "Cloud Infrastructure",
  "Kubernetes",
  "Terraform",
  "Database Migrations",
  "Developer Platforms",
  "AI-Assisted Development",
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <p className={styles.greeting}>Bradley Thompson</p>
        <h1 className={styles.title}>Senior Platform Engineer</h1>
        <p className={styles.summary}>
          I specialize in cloud infrastructure and developer platforms. I've led
          multi-terabyte database migrations, architected internal deployment
          systems that multiplied release velocity, and scaled
          Kubernetes/serverless workloads handling tens of thousands of
          requests per second.
        </p>
        <p className={styles.current}>
          Currently at{" "}
          <a
            href="https://flexa.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            Flexa
          </a>
          . Previously at Glide, Tradewell, Bumped, and eBay.
        </p>
      </header>

      <section className={styles.highlights}>
        <div className={styles.tags}>
          {highlights.map((h) => (
            <span key={h} className={styles.tag}>
              {h}
            </span>
          ))}
        </div>
      </section>

      <section className={styles.contact}>
        <a href="mailto:mail@bradlet.com">mail@bradlet.com</a>
        <span className={styles.dot} aria-hidden="true" />
        <a
          href="https://www.linkedin.com/in/thompson-bradley/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <span className={styles.dot} aria-hidden="true" />
        <a
          href="https://github.com/bradlet"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </section>
    </div>
  );
}
