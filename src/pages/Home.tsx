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
          I build developer platforms and scale cloud infrastructure across AWS
          and GCP. I've led multi-terabyte database migrations, architected
          internal deployment and provisioning systems that increased release
          velocity 5x, and scaled Kubernetes workloads supporting financial
          systems processing $700M+ in daily transactions.
        </p>
        <p className={styles.current}>
          Open to new opportunities. Previously at Flexa, Glide, Tradewell,
          Bumped, and eBay.
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
