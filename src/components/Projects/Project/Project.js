import React from 'react';
import styles from './Project.module.css'

function Project(props) {
    return (
        <div  className={styles.project} >
            <div style={props.style} className={styles.forButtonArea}>
                <div>
                    <form action={props.deploy}>
                    <button >смотреть</button>
                    </form>
                </div>
             <div>
                 <form action={props.source}>
                     <button>исходный код</button>
                 </form>
             </div>

            </div>
            <div className={styles.titleOfSkill}>
                <b>{props.title} </b>
            </div>
            <div className={styles.description}>
               <span>{props.description}</span>
            </div>
        </div>
    );
}

export default Project;
