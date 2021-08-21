import React from 'react';
import styled from 'styled-components';
import styles from './Header.scss';
import { VideoBackground, HeroContainer, HeroBackground} from './HeaderElements';
import Video from '../../videos/aurora.mp4';



class Header extends React.Component{
    render(){
        return(
            <section className={styles.header} id="home">
                {/*<HeroContainer>
                    <HeroBackground>*/}
                <VideoBackground autoPlay loop muted src={Video} type='video/mp4' />
                <br/>
                <h1 className={styles.mainHeader}> SwedishSailor</h1>
                <h3 className={styles.nameHeader}>Kamil Żygowski</h3>
                {/*<p className={styles.description}> Greetings my friend! My name is Kamil, I am 23 years old psychologist, game and frontend developer living in Gdańsk, Poland. My hobbies are: 
                    juggling, making PixelArt-style graphics, learning about human perception, watching anime, coding and of course both playing and making computer games.</p>*/}
                    {/*</HeroBackground>
                    </HeroContainer>*/}
            </section>
        )
    }

}export default Header;