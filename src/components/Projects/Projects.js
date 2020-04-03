import React from 'react';
import styles from './Projects.module.css'
import Project from "./Project/Project";

function Projects() {
    return (
        <div className={styles.projects}>
            <div className={styles.container}>
                <div>
                <h3> Мои проекты </h3>
                </div>
                <div className={styles.allProjects}>
                    <Project/>
                    <Project/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
