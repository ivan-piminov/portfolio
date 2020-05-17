import React from 'react';
import styles from './App.module.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Slogan from "./components/Slogan/Slogan";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import HTML from "./assets/images/HTML.svg";
import JS from "./assets/images/JS.svg";
import RCT from "./assets/images/React.svg";
import CN from "./assets/images/SocialNetwork.jpg";
import Another from "./assets/images/Another.jpg";

const CNStyle = {
    backgroundImage: 'url(' + CN + ')',
};
const ANStyle = {
    backgroundImage: 'url(' + Another + ')',
};


class App extends React.Component {


     skillsItems= [
        {title: "HTML/CSS", description: " Скоро здесь будет описание", picture: HTML},
        {title: "JS", description: "Скоро здесь будет описание", picture: JS},
        {title: "Front-end React",  description: "Скоро здесь будет описание",picture: RCT}
     ];

    projectItems= [
        {title: "Социальная сеть", description: " Скоро здесь будет описание ", style: CNStyle},
        {title: "Калькулятор", description: "Скоро здесь будет описание", style: ANStyle },
    ];


    render() {

        return (
            <div className={styles.app}>
                <div className={styles.portfolio}>
                    <Header />
                    <Main />
                    <Skills skills={this.skillsItems} />
                    <Projects projects={this.projectItems}/>
                    <Slogan/>
                    <Contacts/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;
