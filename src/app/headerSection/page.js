import styles from './header.module.css';

export default function HeaderSection() {
  const titleText = 'Tech Help Heroes';
  return (
    <header className={styles.headerLayout}>
      <h1>{titleText}</h1>
      <div className={styles.navSection}>
        <h2>About</h2>
        <h2>Services</h2>
        <h2>Contact</h2>
        <button className={styles.bookingButton}>
          <h2>Book Now</h2>
        </button>
      </div>
    </header>
  );
}
