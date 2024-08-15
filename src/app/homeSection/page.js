'use client';

import styles from './homeSection.module.css';
import { useEffect, useState, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min';

export default function HomePage() {
  // const [vantaEffect, setVantaEffect] = useState(null);
  // const myRef = useRef(null);
  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(
  //       NET({
  //         el: myRef.current,
  //         mouseControls: true,
  //         touchControls: true,
  //         gyroControls: true,
  //         // minHeight: 200.0,
  //         // minWidth: 200.0,
  //         scale: 1.0,
  //         scaleMobile: 0.25,
  //         color: 0xfc9708,
  //         points: 11.0,
  //         spacing: 10.0,
  //         backgroundColor: '#275070',
  //       })
  //     );
  //   }
  //   return () => {
  //     if (vantaEffect) {
  //       vantaEffect.destroy();
  //     }
  //   };
  // }, [vantaEffect]);
  return (
    <div className={styles.homeSectionLayout}>
      <h1>Tech Help Heroes</h1>
    </div>
  );
}
