import React, {useState} from 'react';
import styles from './Contacts.module.css'
import Headline from "../Headline/Headline";
import Fade from 'react-reveal/Fade';
import axios from "axios";
import preloader from '../../assets/preloader/35.svg'




const Contacts = () => {

    let [name, setName] = useState("");
    let yourName = (e) => {
        setName(e.target.value)
    };

    let [contacts, setContacts] = useState("");
    let yourContacts = (e) => {
        setContacts(e.target.value)
    };
    let [message, setMessage] = useState("");
    let yourMessage = (e) => {
        setMessage(e.target.value)
    };

    let [isHidden, setIsHidden] = useState(true);
    let setStatusHidden = () => {
        setIsHidden(false)
    };
    let oneSetStatusHidden = () => {
        setIsHidden(true)
    };

    let [isHiddenSpan, setIsHiddenSpan] = useState(true);
    let setStatusFalseHiddenSpan = () => {
        setIsHiddenSpan(false)
    };
    let setStatusTrueHiddenSpan = () => {
        setIsHiddenSpan(true)
    };
    let [isHiddenPreloader, setIsHiddenPreloader] = useState(true);
    let setStatusFalsePreloader = () => {
        setIsHiddenPreloader(false)
    };
    let setStatusTruePreloader = () => {
        setIsHiddenPreloader(true)
    };


    const onFormSubmit = (e) => {
        if (name && contacts && message !== "") {
            e.preventDefault();
            setStatusFalsePreloader();
            setName('');
            setContacts('');
            setMessage('');
            axios.post('https://smtp-node-js-server.herokuapp.com/sendMessage', {
                name: name,
                contacts: contacts,
                message: message
            })
                .then(() => {
                        setStatusHidden(false);
                    setStatusTruePreloader();
                    })
        } else {
            e.preventDefault();
            setStatusFalseHiddenSpan();

        }
    };

    return (

        <div className={styles.contacts} id={'contacts'}>
            {!isHiddenPreloader ?
                <img src={preloader} className={styles.preloader}/>
                : null}
            {!isHidden ?
                <div className={styles.successSend}>
                    <div>Ваше сообщение отправлено!</div>
                    <div>
                        <button onClick={oneSetStatusHidden}>Закрыть</button>
                    </div>
                </div>
                : null}
            <Fade bottom>
                <div className={styles.container} id={'contacts'}>
                    <Headline title="Контакты"/>
                    {!isHiddenSpan ?
                        <div className={styles.message}>
                            <span>Заполните,пожалуйста, все необходимые данные</span>
                        </div>
                        : null}
                    <form className={styles.form} onSubmit={onFormSubmit}>

                        <input className={styles.forInputs} placeholder="Ваше имя"
                               value={name}
                               onChange={yourName}
                               onFocus={setStatusTrueHiddenSpan}/>

                        <input className={styles.forInputs} placeholder="Контакты"
                               value={contacts}
                               onChange={yourContacts}
                               onFocus={setStatusTrueHiddenSpan}/>

                        <textarea className={styles.forTextarea} placeholder="Сообщение"
                                  value={message}
                                  onChange={yourMessage}
                                  onFocus={setStatusTrueHiddenSpan}
                        > </textarea>

                        <div className={styles.contactsButton}>
                            <button type="submit">Отправить</button>
                        </div>
                    </form>
                </div>
            </Fade>
        </div>
    );

};

export default Contacts;
