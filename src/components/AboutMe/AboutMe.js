import React from 'react';
import styles from './AboutMe.scss';


class AboutMe extends React.Component {
    render() {
        return (
            <section className={styles.about}>
                <p className={styles.description}> Greetings my friend! My name is Kamil, I am 23 years old psychologist, frontend developer living in Gdańsk, Poland. 
                <br/><span className={styles.love}> I  love </span>:  
                    <span className={styles.juggling}> juggling </span>
                    , 
                    <span className={styles.pixelart}> making PixelArt-style graphics </span>
                    , 
                    <span className={styles.perception}> learning about human perception </span> 
                    , 
                    <span className={styles.anime}> watching anime </span>
                    , 
                    <span className={styles.coding}> coding </span>
                    and of course both 
                    <span className={styles.games}> playing </span> and 
                    <span className={styles.games}> making computer games!</span> </p>
                <img className={styles.photo} src='src/images/heinc.jpg'/>
            </section>

        );
    }
}

export default AboutMe;