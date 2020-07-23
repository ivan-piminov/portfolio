import React from 'react';
import styles from './RemoteWork.module.css'
import Headline from "../Headline/Headline";
import Fade from 'react-reveal/Fade';

function RemoteWork() {
    return (
        <div className={styles.slogan}>
            <Fade bottom>
                <div className={styles.container}>
                    <div className={styles.margin}>
                    <Headline title="Рассматриваю варианты удаленной работы"/>
                    </div>
                    <div className={styles.sloganButton}>
                        <form action={'https://www.linkedin.com/in/ivan-piminov/'}>
                            <button type="submit">Нанять меня</button>
                        </form>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default RemoteWork;
