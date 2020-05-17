import React from 'react';
import styles from './Contacts.module.css'
import Headline from "../Headline/Headline";
import Button from "../Buttons/Button";

function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
                <Headline title="Контакты"/>

                <div className={styles.form}>
                    <form>
                        <div>
                            <input className={styles.forInputs} placeholder="Ваше имя"/>
                        </div>
                        <div >
                            <input className={styles.forInputs} placeholder="Контакты"/>
                        </div>
                        <textarea className={styles.forTextarea} placeholder = "Текст сообщения" > </textarea>
                    </form>
                </div>
                <div>
                    <Button title="Отправить"/>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
