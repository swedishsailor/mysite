import React from 'react';
import styled from 'styled-components';
import styles from './Header.scss';
import { VideoBackground, HeroContainer, HeroBackground} from './HeaderElements';
//import Video from '../../videos/aurora.mp4';



class Header extends React.Component{
    render(){
        return(
            <section className={styles.header} id="home">
                {/*<HeroContainer>
                    <HeroBackground>*/}
                <VideoBackground autoPlay loop muted src='src/videos/aurora.mp4' type='video/mp4' />
                <br/>
                <h1 className={styles.mainHeader}> SwedishSailor</h1>
                <h3 className={styles.nameHeader}>Kamil Żygowski</h3>
                    {/*</HeroBackground>
                    </HeroContainer>*/}
            </section>
        )
    }

}export default Header;