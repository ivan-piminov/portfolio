import React from 'react';
import styles from './Skills.module.css'
import Skill from "./Skill/Skill";

function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>

                <h3> Мои скиллы</h3>

                <div className={styles.allSkills}>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </div>
            </div>
        </div>
    )
}

export default Skills;
