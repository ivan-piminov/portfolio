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
import CN from "./assets/images/scale_1200.webp";
import Another from "./assets/images/Calc7.jpg";
import Particles from 'react-particles-js';

const particleOpt={
    "particles": {
        "number": {
            "value": 91,
            "density": {
                "enable": false,
                "value_area": 300
            }
        },
        "color": {
            "value": "#f7f7f7"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.2,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 4,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
};



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
        {title: "React/Redux",  description: "Скоро здесь будет описание",picture: RCT}
     ];

    projectItems= [
        {title: "Социальная сеть", description: " Скоро здесь будет описание ", style: CNStyle},
        {title: "Счетчик", description: "Скоро здесь будет описание", style: ANStyle },
    ];


    render() {

        return (
            <div className={styles.app}>
                    <Particles className={styles.particle} params={particleOpt}/>
                    <Header />
                    <Main />
                    <Skills skills={this.skillsItems} />
                    <Projects projects={this.projectItems}/>
                    <Slogan/>
                    <Contacts/>
                    <Footer/>
            </div>
        );
    }
}

export default App;
