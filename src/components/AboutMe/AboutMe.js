import React from 'react';
import styles from './AboutMe.scss';


class AboutMe extends React.Component {
    render() {
        return (
            <section className={styles.about}>
                <p className={styles.description}> Greetings my friend! My name is Kamil, I am 23 years old psychologist, frontend developer living in Gdańsk, Poland. My hobbies are:  
                     juggling, making PixelArt-style graphics, learning about human perception, watching anime, coding and of course both playing and making computer games!</p>
                <img className={styles.photo} src='src/images/heinc.jpg'/>
            </section>

        );
    }
}

export default AboutMe;