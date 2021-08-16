import React from 'react';
import styles from './Home.scss';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Games from '../Games/Games';
import PixelArt from '../PixelArt/PixelArt';
import PhotoShop from '../PhotoShop/PhotoShop';
import Footer from '../Footer/Footer';
import ContactMe from '../ContactMe/CotactMe';
import Socials from '../Socials/Socials';


class Home extends React.Component{
    render(){
        return(
            
                <main className={styles.mainApp}>
                    <div className={styles.image}>
                    <Header></Header>
                    <Socials></Socials>
                    {/*<img className={styles.gameImg} src="https://i.postimg.cc/SK9yPQrZ/games.png"></img>*/}
                   <Games className={styles.Games}></Games>
                    {/*<div className={styles.hoverable}><div className={styles.first}></div><div className={styles.second}></div><div className={styles.third}></div><div className={styles.fourth}></div></div>
                    <div className={styles.extend}></div>*/}
                    <div className={styles.bigger}></div>
                    <PixelArt className={styles.PixelArt}></PixelArt>
                    <ContactMe></ContactMe>
                    <Footer></Footer>
                    </div>
                </main>
            );
        }
    }

    export default Home;