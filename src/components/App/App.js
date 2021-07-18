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
                    <Header></Header>
                    <Games></Games>
                    <PixelArt></PixelArt>
                    <Footer></Footer>
                   
                </main>
            );
        }
    }

    export default App;