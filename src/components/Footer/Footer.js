import React from 'react';
import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.footer}>

      <div className={styles.name}>
        <span>Иван Иванов</span>
      </div>

      <div className={styles.social}>
          <div className={styles.a}>VK</div>
          <div className={styles.a}>INST</div>
          <div className={styles.a}>FB</div>
          <div className={styles.a}>WHT</div>
      </div>

        <div>
            <spa> 2020 г. Все права защищены.</spa>
        </div>
    </div>
  );
}

export default Footer;
