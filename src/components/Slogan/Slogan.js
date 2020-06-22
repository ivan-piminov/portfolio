import React from 'react';
import styles from './Slogan.module.css'
import Headline from "../Headline/Headline";
import Fade from 'react-reveal/Fade';

function Slogan() {
    return (
        <div className={styles.slogan}>
            <Fade bottom>
                <div className={styles.container}>
                    <div className={styles.margin}>
                    <Headline title="Рассматриваю варианты удаленной работы"/>
                    </div>
                    <div className={styles.sloganButton}>
                        <button type="submit">Нанять меня</button>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Slogan;
