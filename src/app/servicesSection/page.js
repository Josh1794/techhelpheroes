import ServiceCard from './serviceCard';
import styles from './servicesSection.module.css';

export default function ServicesSection() {
  const services = [
    {
      title: 'Tech Help for Seniors/On-Call Services',
      description:
        'We’ll help your loved one learn new tech and software with patient, kind, non-judgmental instruction and create a custom how-to and FAQ sheet for them to reference as needed.\n\nWe’re also here to troubleshoot problems as they come up: If your loved one disconnects a device or needs a hand getting into their accounts, We can provide same day or next-day help over the phone, on a video call or in the home.',
    },
    {
      title: 'In-Home Tech Support/Education',
      description: `Need help learning a new device or tech? Did something go wrong and Google can’t help? Call us for personalized, one-on-one support.`,
    },
    {
      title: 'Family Online Safety and Monitoring',
      description: `Let us help you curate and supervise your kids’ online experience on their phones, computers, tablets, and gaming consoles. We’ll collaborate with you on a parental control system with your desired levels of monitoring, blocking, and screen time that won’t be circumvented by even the most tech-savvy kids.`,
    },
    {
      title: 'Smart Home Design and Setup',
      description: `We’ll design and implement a custom plan to bring your home into the future with smart devices and home accessories. Don’t waste your time sifting through endless reviews and buying things you don’t need. Let us outfit your space with the best tech and get all your devices connected.`,
    },
    {
      title: 'Purchase Consultations',
      description:
        'We will discuss what products best meet your needs and wants. Should you opt for that pricey extra storage or save your money for something more important. We will advise you on what products are available, what is best for your budget, use case, and preference.',
    },
  ];
  return (
    <div className={styles.serviceSectionLayout}>
      <h1>Services</h1>
      <div className={styles.serviceSectionCardLayout}>
        {services.map((service) => {
          return <ServiceCard service={service} />;
        })}
      </div>
    </div>
  );
}
