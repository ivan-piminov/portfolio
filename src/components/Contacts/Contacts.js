import React from 'react';
import styles from './Contacts.module.css'
import Headline from "../Headline/Headline";
import Fade from 'react-reveal/Fade';
import axios from "axios";


class Contacts extends React.Component {

    constructor() {
        super();
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            name: '',
            contacts: '',
            message: '',
        };
    }


    onFormSubmit(e) {
        if (this.state.name && this.state.contacts && this.state.message !== "") {
            e.preventDefault()
            // alert(JSON.stringify(this.state));
            axios.post('https://smtp-node-js-server.herokuapp.com/sendMessage', {
                name: this.state.name,
                contacts: this.state.contacts,
                message: this.state.message
            })
                .then(() => {
                    alert("Ваше сообщение было отправлено")
                }, this.setState({
                    name: '',
                    contacts: '',
                    message: ''
                }))
        } else {
            e.preventDefault()
            alert("Заполните,пожалуйста, все необходимые данные")
        }
    }

    render() {
        return (
            <div className={styles.contacts} id={'contacts'}>
                <Fade bottom>
                    <div className={styles.container} id={'contacts'}>
                        <Headline title="Контакты"/>
                        <form className={styles.form} onSubmit={this.onFormSubmit}>

                                <input className={styles.forInputs} placeholder="Ваше имя"
                                       value={this.state.name}
                                       onChange={e => this.setState({name: e.target.value})}/>

                                <input className={styles.forInputs} placeholder="Контакты"
                                       value={this.state.contacts}
                                       onChange={e => this.setState({contacts: e.target.value})}/>

                            <textarea className={styles.forTextarea} placeholder="Сообщение"
                                      value={this.state.message}
                                      onChange={e => this.setState({message: e.target.value})}
                            > </textarea>

                            <div className={styles.contactsButton}>
                                <button type="submit">Отправить</button>
                            </div>
                        </form>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default Contacts;
