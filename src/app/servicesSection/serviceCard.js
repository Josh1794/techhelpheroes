import styles from './servicesSection.module.css';

export default function ServiceCard({ service }) {
  return (
    <div className={styles.serviceSectionCard}>
      <h3 className={styles.serviceSectionCardTitle}>{service.title}</h3>
      <p className={styles.serviceSectionCardDescription}>
        {service.description}
      </p>
    </div>
  );
}
