import React from 'react';
import styles from './Contacts.module.css'

function Contacts() {
    return (
        <div className={styles.contacts}>


            <div className={styles.contact}>
                <h3> Контакты</h3>
            </div>


            <div className={styles.form}>
                <form>
                    <div className={styles.b}>
                        <input/>
                    </div>
                    <div className={styles.b}>
                        <input/>
                    </div>
                    <textarea className={styles.a}> оставьте свое сообщение</textarea>
                </form>
            </div>
            <div>
                <button>Отправить</button>
            </div>
        </div>
    );
}

export default Contacts;
