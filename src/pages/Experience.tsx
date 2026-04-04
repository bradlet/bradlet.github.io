import resumeRaw from "../content/resume.md?raw";
import Markdown from "../components/Markdown";
import styles from "./Experience.module.css";

const resumeContent = resumeRaw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "");

export default function Experience() {
  return (
    <div className={styles.page}>
      <Markdown content={resumeContent} />
    </div>
  );
}
