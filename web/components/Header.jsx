import Link from 'next/link'
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <ul className={styles.ul}>
        <li><Link href="/">runeb.io</Link></li>
        <li><Link href="/posts">Writing</Link></li>
        <li>Audio</li>
      </ul>
    </header>
  );
};

export default Header;
