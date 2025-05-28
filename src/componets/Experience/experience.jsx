import React from 'react';
import styles from './experience.module.css';

import history from '../../data/history.json';
import skills from '../../data/skills.json';

export const Expeiernce = () => { 
    return <section className={styles.container} id="experience">
       <h2 className={styles.title}>Experience</h2>
       <div className={styles.content}>
        <div className={styles.skills}>
            {skills.map((skill,id) => {
                return (
                    <div key={id} className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={skill.imageSrc} alt={skill.title}/>
                        </div>
                        <p>{skill.title}</p>
                        </div>
                );
            })}
        </div>
        <ul className={styles.history}>
            {history.map((historyItem, id) => {
                return (
                    <li key={id} className={styles.historyItem}>
                        <img
                        src={historyItem.imageSrc}
                        alt={` ${historyItem.organization} Logo`}
                        className={styles.organizationLogo}
                        />
                        <div className={styles.historyItemDetails}>
                            <h3>{`${historyItem.role}, ${historyItem.organization}`}</h3>
                            <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                            <ul>{historyItem.experiences.map((expeiernce, id) => {
                                return <li key={id}>{expeiernce}</li>;
                            })}
                            </ul>
                        </div>
                    </li>
                )
            })}
        </ul>
       </div>
        </section>
}