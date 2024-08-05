import Typewriter from '../typewriter';
import styles from './aboutSection.module.css';

export default function AboutSection() {
  const aboutBody = `
        Think of us as your high-tech handyman and gadget guru. We offer personalized,
        in-home services and education to make your life easier, smarter, and more connected.
        We’re here to solve your tech woes, source and install the best products,
        and teach you how to navigate your devices and systems.
        Whether you need assistance setting up new
        devices, troubleshooting issues, or simply learning how to get the most
        out of your current gadgets, we're here to help. Our mission is to
        empower you with the skills and knowledge to confidently navigate
        today’s technology, ensuring you stay connected and productive. Let us
        take the tech stress out of your life so you can focus on what matters
        most.`;

  return (
    <div className={styles.aboutSectionLayout}>
      <h1 className={styles.aboutSectionTitle}>About</h1>
      <p className={styles.aboutSectionBody}>{aboutBody}</p>
      {/* <Typewriter text={aboutBody} delay={5} /> */}
    </div>
  );
}
