import React from 'react';
import styles from './Skill.module.css'

function Skill() {
    return (
        <div className={styles.skill1}>
            <div>
                <img className={styles.photo}/>
            </div>
            <div className={styles.n}>
                <div>React</div>
                <span> Подробное описание навыка</span>
            </div>
        </div>
    )
}
export default Skill;
