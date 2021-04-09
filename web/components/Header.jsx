import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className={styles.ul}>
          <li>
            <Link href="/">runeb.io</Link>
          </li>
          <li>
            <Link href="/posts">Writing</Link>
          </li>
          <li>
            <Link href="/recipes">Food</Link>
          </li>
          <li>
            <Link href="/audiograms">Field recordings</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
