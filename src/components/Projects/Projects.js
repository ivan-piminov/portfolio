import React from 'react';
import styles from './Projects.module.css'
import Project from "./Project/Project";
import Headline from "../Headline/Headline";
import Fade from 'react-reveal/Fade';

function Projects(props) {

    let projectsItem = props.projects.map((p) => {
        return <Project title={p.title} description={p.description} style={p.style}/>
    });
    return (
        <div className={styles.projects} id='projects'>
            <Fade bottom>
                <div className={styles.container}>
                    <Headline title="Проекты"/>
                    <div className={styles.allProjects}>
                        {projectsItem}
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Projects;
