import React from 'react';
import styles from './Skills.module.css'
import Skill from "./Skill/Skill";
import Headline from "../Headline/Headline";

function Skills(props) {

    let skillsItems = props.skills.map((s) => {
        return <Skill title={s.title} description={s.description} picture={s.picture}/>
    });

    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <Headline title="Мои скиллы"/>
                <div className={styles.allSkills}>
                    {skillsItems}
                </div>
            </div>
        </div>
    )
}


export default Skills;
