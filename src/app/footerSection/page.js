import Image from 'next/image';
import styles from './footerSection.module.css';

export default function FooterSection() {
  return (
    <div className={styles.footerSectionLayout}>
      <Image
        src='/Tech Help Heroes.png'
        width={200}
        height={200}
        alt='Tech Help Heroes Logo'
      />
    </div>
  );
}
