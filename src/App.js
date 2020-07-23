import React from 'react';
import styles from './App.module.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import RemoteWork from "./components/RemoteWork/RemoteWork";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import HTML from "./assets/images/HTML.svg";
import JS from "./assets/images/JS.svg";
import RCT from "./assets/images/React.svg";
import CN from "./assets/images/scale_1200.webp";
import Another from "./assets/images/Calc7.jpg";
import TDL from "./assets/images/ToDoList";
import TS from "./assets/images/ts.svg"
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
const ToDoList = {
    backgroundImage: 'url(' + TDL + ')',
};



class App extends React.Component {

     skillsItems= [
        {title: "HTML/CSS", description: "HTML5, CSS3. Работа с module CSS в React, flexbox", picture: HTML},
        {title: "JS", description: "ES6, ООП, promises,async/await, REST API", picture: JS},
        {title: "React/Redux",  description: "axios, redux-form, redux-thunk,HOOK,HOC, store,action creator,dispatch, virtual DOM ",picture: RCT},
        {title: "TypeScript",  description: "Строгая типизация на этапе разаработки ускоряет рабочий процесс",picture: TS}
     ];

    projectItems= [
        {title: "Социальная сеть", description: "Основной SPA проект, который в дальнейшем будет развиваться. На сегодняшний день реализован следующий функционал: LogIn, LogOut, загрузка списка всех пользователей, возможность просмотра профиля пользователей, Follow, Unfollow, Pagination, изменение фото и данных (имя, контакты и пр.) своего профиля. В разаработке используется связка React + Redux.", style: CNStyle,source:"https://github.com/ivan-piminov/SocialNetwork.git", deploy:"https://ivan-piminov.github.io/SocialNetwork" },
        {title: "Счетчик", description: "Счетчик с настройкой максимального и минимального значений, а также проверкой их корректного ввода.", style: ANStyle, source:"https://github.com/ivan-piminov/Counter.git", deploy:"https://ivan-piminov.github.io/Counter"  },
        {title: "ToDoList", description: "ToDoList c реализацией всех CRUD-операций, выполнен с использованием TypeScript.", style: ToDoList,source:"https://github.com/ivan-piminov/TodoList.git", deploy:"https://ivan-piminov.github.io/TodoList" },
    ];


    render() {

        return (
            <div className={styles.app}>
                    <Particles className={styles.particle} params={particleOpt}/>
                    <Header />
                    <Main />
                    <Skills skills={this.skillsItems} />
                    <Projects projects={this.projectItems}/>
                    <RemoteWork/>
                    <Contacts/>
                    <Footer/>
            </div>
        );
    }
}

export default App;
