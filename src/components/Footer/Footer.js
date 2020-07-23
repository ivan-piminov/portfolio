import React from 'react';
import styles from './Footer.module.css'
import INST from '../../assets/images/Instagram2.svg'
import telegram from '../../assets/images/telegram2.svg'
import WHT from '../../assets/images/WHT2.svg'
import VK from '../../assets/images/VK2.svg'
import LI from '../../assets/images/linkedin.svg'

import Fade from 'react-reveal/Fade';


function Footer() {

    return (
        <div className={styles.footer}>
            <Fade bottom>
                <div>
                    <span>Иван Пиминов</span>
                </div>
                <div className={styles.line}></div>

                <div className={styles.social}>
                    <div className={styles.contact}>
                        <a href="https://vk.com/id30011234">
                            <img className={styles.logo} alt='' src={VK}/>
                        </a>
                    </div>
                    <div className={styles.contact}>
                        <a href="https://www.instagram.com/ivan.piminov/">
                            <img className={styles.logo} alt='' src={INST}/>
                        </a>
                    </div>
                    <div className={styles.contact}>
                        <a href="https://t.me/Ivan_piminov">
                            <img className={styles.logo} alt='' src={telegram}/>
                        </a>
                    </div>
                    <div className={styles.contact}>
                        <a href="https://api.whatsapp.com/send?phone=79150629712">
                            <img className={styles.logo} alt='' src={WHT}/>
                        </a>
                    </div>
                    <div className={styles.contact}>
                        <a href="https://www.linkedin.com/in/ivan-piminov/">
                            <img className={styles.logo} alt='' src={LI}/>
                        </a>
                    </div>
                </div>
                <div>
                    <span> 2020 г. Все права защищены.</span>

                </div>
            </Fade>
        </div>
    );
}


export default Footer;
