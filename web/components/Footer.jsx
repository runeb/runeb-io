import Link from 'next/link'
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <ul className={styles.ul}>
        <li><Link href="https://twitter.com/runeb">Twitter</Link></li>
        <li><Link href="https://youtube.com/sanity-io">YouTube</Link></li>
      </ul>
    </footer>
  );
};

export default Footer;
