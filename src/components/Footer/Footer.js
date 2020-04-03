import React from 'react';
import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.footer}>

      <div>
        <span>Иван Иванов</span>
      </div>

      <div className={styles.social}>
          <div className={styles.contact}>VK</div>
          <div className={styles.contact}>INST</div>
          <div className={styles.contact}>FB</div>
          <div className={styles.contact}>WHT</div>
      </div>

        <div>
            <span> 2020 г. Все права защищены.</span>
        </div>
    </div>
  );
}

export default Footer;
