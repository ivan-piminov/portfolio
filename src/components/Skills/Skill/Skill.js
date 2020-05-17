import React from 'react';
import styles from './Skill.module.css'


function Skill(props) {
    return (
        <div className={styles.skill}>
            <img className={styles.photo} src={props.picture}/>
            <div className={styles.description}>
                <div className={styles.NameOfSkill}> {props.title}</div>
                <div className={styles.descriptionOfSkill}>
                    {props.description}
                </div>
            </div>
        </div>
    )
}

export default Skill;
