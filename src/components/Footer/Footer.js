import React from 'react';
import styles from './Footer.module.css'
import INST from '../../assets/images/Instagram2.svg'
import telegram from '../../assets/images/telegram2.svg'
import WHT from '../../assets/images/WHT2.svg'
import VK from '../../assets/images/VK2.svg'


function Footer() {
    return (
        <div className={styles.footer}>

            <div>
                <span>Иван Пиминов</span>
            </div>
            <div className={styles.line}></div>

            <div className={styles.social}>
                <div className={styles.contact}>
                    <a href="">
                        <img alt='' src={VK}/>
                    </a>
                </div>
                <div className={styles.contact}>
                    <a href="">
                        <img alt='' src={INST}/>
                    </a>
                </div>
                <div className={styles.contact}>
                    <a href="">
                        <img alt='' src={telegram}/>
                    </a>
                </div>
                <div className={styles.contact}>
                    <a href="">
                        <img alt='' src={WHT}/>
                    </a>
                </div>

            </div>

            <div>
                <span> 2020 г. Все права защищены.</span>
            </div>
        </div>
    );
}

export default Footer;
