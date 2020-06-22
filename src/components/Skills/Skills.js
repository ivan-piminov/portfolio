import React from 'react';
import styles from './Skills.module.css'
import Skill from "./Skill/Skill";
import Headline from "../Headline/Headline";
import Fade from 'react-reveal/Fade';

function Skills(props) {

    let skillsItems = props.skills.map((s) => {
        return <Skill title={s.title} description={s.description} picture={s.picture}/>
    });

    return (
        <div className={styles.skills} id='skills'>
            <Fade bottom>
            <div className={styles.container}>
                <Headline title="Мои скиллы"/>
                <div className={styles.allSkills}>
                    {skillsItems}
                </div>
            </div>
                </Fade>
        </div>
    )
}


export default Skills;
