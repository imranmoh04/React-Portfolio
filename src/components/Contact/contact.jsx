import React from "react";

import styles from "./contact.module.css"
export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.containerCon}>
                <h2 className={styles.title}>Contact</h2>
                <p className={styles.desc}>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src="assets/contact/emailIcon.png" alt="Email Icon"/>
                    <a href="mailto:mohidimran0419@gmail.com">Mohidimran0419@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src="assets/contact/linkedinIcon.png" alt="Linkedin Icon"/>
                    <a href="https://www.linkedin.com/mohid-imran">Linkedin.com</a>
                </li>
                <li className={styles.link}>
                    <img src="assets/contact/githubIcon.png" alt="Github Icon"/>
                    <a href="https://www.github.com/imranmoh04">github.com/imranmoh04</a>
                </li>
            </ul>
        </footer>
    )
}