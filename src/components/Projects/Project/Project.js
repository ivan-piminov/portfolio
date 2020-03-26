import React from 'react';
import styles from './Project.module.css'

function Project() {
    return (
        <div className={styles.a}>
            <div className={styles.prod}>
                <button> смотреть </button>
            </div>
            <div>
                <span>Название текста</span>
            </div>
            <div>
                <p className={styles.c}>описание </p>
            </div>
        </div>
    );
}

export default Project;
