import React from 'react';
import styles from './App.scss';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Games from '../Games/Games';
import PixelArt from '../PixelArt/PixelArt';

class App extends React.Component{
    render(){
        return(
            
                <main>
                    <Header></Header>
                    <Games></Games>
                    <PixelArt></PixelArt>
                </main>
            );
        }
    }

    export default App;