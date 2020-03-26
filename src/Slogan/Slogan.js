import React from 'react';
import styles from './Slogan.module.css'

function Slogan() {
    return (
        <div className={styles.slogan}>
            <div className={styles.c}>
                <div className={styles.a}>
                    <span> Рассматриваю варианты удаленной работы</span>
                </div>
                < div className={styles.b}>
                    <button> Нанять меня</button>
                </div>
            </div>
        </div>
    );
}

export default Slogan;
