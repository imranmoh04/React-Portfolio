import React from 'react';
import styles from './me.module.css';

export const Me = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mohid</h1>
        <p className={styles.description}>I'm a Computer Science Student Intersted in Full Stack Development, Tech Consulting, and Cool Ideas! Reach out if you'd like to learn more! </p>
        <a href="mohidimran0419@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src="/assets/me/me.png" alt="Mohid Imran" className={styles.meImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>;
}