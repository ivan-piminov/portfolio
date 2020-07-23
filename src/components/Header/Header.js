import React from 'react';
import styles from './Header.module.css';
import {Link} from "react-scroll"

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.nav}>
                   <Link to='main' smooth={true} className={styles.nav}>Главная</Link>
                    <Link to='skills' smooth={true} className={styles.nav}> Скиллы </Link>
                    <Link to='projects' smooth={true} className={styles.nav}> Проекты </Link>
                    <Link to='contacts' smooth={true} className={styles.nav}> Контакты </Link>
                </div>

            </div>
        </div>
    );
}

export default Header;
