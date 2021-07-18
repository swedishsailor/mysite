import React from 'react';
import styles from './Footer.scss';

class Footer extends React.Component{
    render(){
        return(
            <section className={styles.footer}>
                <br/>
                <p className={styles.footerText}>@2021 SwedishSailor - Kamil Żygowski</p>
            </section>
        )
    }
} export default Footer;