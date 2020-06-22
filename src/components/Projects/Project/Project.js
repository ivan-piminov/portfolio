import React from 'react';
import styles from './Project.module.css'

function Project(props) {
    return (
        <div  className={styles.project} >
            <div style={props.style} className={styles.forButtonArea}>
                <button>смотреть</button>
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
