import Image from 'next/image';
import styles from './homeSection.module.css';
import Typewriter from '../typewriter';

export default function HomePage() {
  return (
    <div className={styles.homeSectionLayout}>
      <h1>Tech Help Heroes</h1>
    </div>
  );
}
