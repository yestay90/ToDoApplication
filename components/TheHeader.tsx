import Link from "next/link";
import styles from "./TheHeader.module.css";

const TheHeader = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.menuItem} href="/">
        To Do List
      </Link>
      <Link className={styles.menuItem} href="/new">
        New Item
      </Link>
    </header>
  );
};

export { TheHeader };
