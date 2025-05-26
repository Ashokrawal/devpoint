import Link from "next/link";
import React from "react";
import styles from "../list/projects.module.css";

const ProjectList = () => {
  return (
    <div>
      <h1>Projects Lists</h1>
      <ul className={styles.ul}>
        <li>
          <Link href="/projects/carrent">Car Rent</Link>
        </li>
        <li>
          <Link href="/projects/jobit">Job it</Link>
        </li>
        <li>
          <Link href="/projects/hipnode">Hipnode</Link>
        </li>
      </ul>
    </div>
  );
};

export default ProjectList;
