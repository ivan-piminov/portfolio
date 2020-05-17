import React from 'react';
import styles from './Project.module.css'
import Button from "../../Buttons/Button";

function Project(props) {
    return (
        <div  className={styles.project} >
            <div style={props.style} className={styles.forButtonArea}>
                <button>смореть</button>
            </div>
            <div className={styles.titleOfSkill}>
                {props.title}
            </div>
            <div className={styles.description}>
                {props.description}
            </div>
        </div>
    );
}

export default Project;
