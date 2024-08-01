import styles from './page.module.css';
import HomePage from './homePage/page';
import HeaderSection from './headerSection/page';
import AboutSection from './aboutSection/page';
import FooterSection from './footerSection/page';
import ContactSection from './contactSection/page';
import ServicesSection from './servicesSection/page';

export default function Home() {
  return (
    <div className={styles.main}>
      <HeaderSection />
      <HomePage />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
