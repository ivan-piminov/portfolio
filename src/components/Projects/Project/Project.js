import React from 'react';
import styles from './Project.module.css'

function Project() {
    return (
        <div className={styles.project}>
            <div className={styles.forButtonArea}>
                <button> смотреть </button>
            </div>
            <div>
                <span>Название текста</span>
            </div>
            <div>
                <p >описание </p>
            </div>
        </div>
    );
}

export default Project;
