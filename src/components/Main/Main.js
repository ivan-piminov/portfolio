import React from 'react';
import styles from './Main.module.css'
import background from "../../assets/images/Фон2.jpg";
import ava from '../../assets/images/AVA.jpg'


const back = {
    backgroundImage: 'url(' + background + ')'
};

function Main() {
    return (
        <div className={styles.main} style={back} id='main'>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Привет!</span>
                    <span>Я Иван <span>Пиминов</span></span>
                    <h1>Я front-end разработчик</h1>
                </div>

                <div className={styles.photo}>
                    <div className={styles.image}>
                    <img src={ava} alt="avatar"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
