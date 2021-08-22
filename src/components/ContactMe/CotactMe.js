import React from 'react';
import styles from './ContactMe.scss';

class ContactMe extends React.Component{
    render(){
        return(
            <section className={styles.contactMeSectiom} id="/contact">
                <h2 className={styles.header}>CONTACT ME</h2>
                <form className={styles.form} action="https://formsubmit.co/kzygowski7@gmail.com" method="POST">
                    <input type='text' name='name' className={styles.input} placeholder='Your name' required></input>
                    <input type='email' name='email' className={styles.input} placeholder='Your email' required></input>
                    {/*<input type='tel' className={styles.input} placeholder='Your phone'></input>*/}
                    <textarea className={styles.textarea} name='text' placeholder='Your message' required></textarea>
                    <input type='submit' className={styles.submit} value='Send'></input>
                </form>
                
            </section>
        )
    }
} export default ContactMe;