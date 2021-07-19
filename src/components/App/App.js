import React from 'react';
import styles from './App.scss';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Games from '../Games/Games';
import PixelArt from '../PixelArt/PixelArt';
import PhotoShop from '../PhotoShop/PhotoShop';
import Footer from '../Footer/Footer';


class App extends React.Component{
    render(){
        return(
            
                <main>
                    <div className={styles.image}>
                    <Header></Header>
                    {/*<img className={styles.gameImg} src="https://i.postimg.cc/SK9yPQrZ/games.png"></img>*/}
                   <Games></Games>
                   
                    <PixelArt></PixelArt>
                    <Footer></Footer>
                    </div>
                </main>
            );
        }
    }

    export default App;