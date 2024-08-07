import Link from 'next/link';
import styles from './contactSection.module.css';

export default function ContactSection() {
  return (
    <div className={styles.contactSectionLayout}>
      <h1 className={styles.contactSectionTitle}>Contact</h1>
      <div className={styles.contactSectionBody}>
        <div className={styles.contactSectionBodyGroup}>
          <p>Phone: </p>
          <Link
            className={styles.contactSectionBodyLink}
            href='tel:+19177274209'
          >
            1-917-727-4209
          </Link>
        </div>
        <div className={styles.contactSectionBodyGroup}>
          <p>Email: </p>
          <Link
            className={styles.contactSectionBodyLink}
            href='mailto:techhelpheroes@gmail.com'
          >
            techhelpheroes@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
}
