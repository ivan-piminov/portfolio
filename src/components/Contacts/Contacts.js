import React from 'react';
import styles from './Contacts.module.css'

function Contacts() {
    return (
        <div className={styles.contacts}>

                <h3> Контакты</h3>

            <div className={styles.form}>
                <form>
                    <div className={styles.forInputs}>
                        <input/>
                    </div>
                    <div className={styles.forInputs}>
                        <input/>
                    </div>
                    <textarea className={styles.forTextarea}> оставьте свое сообщение</textarea>
                </form>
            </div>
            <div>
                <button>Отправить</button>
            </div>
        </div>
    );
}

export default Contacts;
