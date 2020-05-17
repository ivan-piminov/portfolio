import React from 'react';
import styles from './Slogan.module.css'
import Headline from "../Headline/Headline";
import Button from "../Buttons/Button";

function Slogan() {
    return (
        <div className={styles.slogan}>
            <div className={styles.container}>
                <Headline title = "Рассматриваю варианты удаленной работы"/>
                <div className={styles.button}>
                    <Button title="Нанять меня"/>
                </div>
            </div>
        </div>
    );
}

export default Slogan;
