import Link from "next/link";
import styles from "../../components/navbar.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <Link href="/projects/list">see lists</Link>
        <h1>HOME</h1>
        <footer className=""></footer>
      </div>
    </>
  );
}
