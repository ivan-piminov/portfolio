import React from 'react';
import styles from './Header.module.css'

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.nav}>
                    <a href='' className={styles.nav}> Главная </a>
                    <a href='' className={styles.nav}> Скиллы </a>
                    <a href='' className={styles.nav}> Проекты </a>
                    <a href='' className={styles.nav}> Контакты </a>
                </div>

            </div>
        </div>
    );
}

export default Header;
