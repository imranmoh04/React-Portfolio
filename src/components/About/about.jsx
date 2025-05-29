import React from 'react';
import styles from './about.module.css';


export const About = () => {
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
            src='/assets/about/aboutImage.png'
            alt="me with laptop"
            className={styles.aboutImg}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img 
                    src='/assets/about/cursorIcon.png'
                    alt="Cursor icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>
                            I'm a frontend developer with expeiernce in building
                             responsive and opotimized sites 
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                    src="/assets/about/serverIcon.png"
                    alt="Server icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>
                            I have expeiernce developing fast and optimised back-end systems
                             and APIs
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                    src="/assets/about/uiIcon.png"
                    alt="UI icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>
                            I have desinged multiple landing pages 
                            and have desinged systems as well 
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
}